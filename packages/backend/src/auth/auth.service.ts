import { PrismaService } from "@/prisma.service"
import { UserService } from "@/user/user.service"
import { getEmailHtml } from "@/utils/helpers"
import { MailerService } from "@nestjs-modules/mailer"
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { JwtService } from "@nestjs/jwt"
import { User } from "@prisma/client"
import { hash, verify } from "argon2"
import { Response } from "express"
import { ConfirmationDto, GoogleDto, LoginDto, RegisterDto } from "./dto/auth.dto"

@Injectable()
export class AuthService {
  EXPIRE_DAY = 3
  REFRESH_TOKEN = "refreshToken"
  LOGIN_DATE_EXPIRE = new Date(new Date().setDate(new Date().getDate() + 28))

  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private jwtServise: JwtService,
    private mailerService: MailerService,
    private configService: ConfigService
  ) {}

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto)

    if (this.isPastDate(user.loggedAt)) {
      const { code, expiration } = await this.generateSignInCode()

      await this.saveCodeByUserId(user.id, code, expiration)

      await this.mailerService.sendMail({
        to: user.email,
        from: "auth.nest.next@gmail.com",
        subject: "Login Confirmation",
        html: getEmailHtml(code)
      })

      return { code, expiration }
    } else {
      const tokens = await this.issueTokens(user.id)
      return { user: this.returnUserFields(user), ...tokens }
    }
  }

  async confirmation(dto: ConfirmationDto) {
    const user = await this.userService.findByEmail(dto.email)
    if (!user) throw new NotFoundException("User not found")

    const { code, expiration } = await this.getCodeByUserId(user.id)

    if ((!expiration && !code) || code !== dto.code || this.isPastDate(expiration))
      throw new UnauthorizedException("Invalid or expired code")

    await this.deleteCodeByUserId(user.id)
    await this.userService.updateLastLoginDateById(user.id)

    const tokens = await this.issueTokens(user.id)
    return { user: this.returnUserFields(user), ...tokens }
  }

  async register(dto: RegisterDto) {
    const existUser = await this.userService.findByEmail(dto.email)

    if (existUser) throw new BadRequestException("User already exist")

    const user = await this.prisma.user.create({
      data: {
        loggedAt: this.LOGIN_DATE_EXPIRE,
        email: dto.email,
        login: dto.login,
        password: await hash(dto.password)
      }
    })

    const tokens = await this.issueTokens(user.id)

    return { user: this.returnUserFields(user), ...tokens }
  }

  async google(dto: GoogleDto) {
    const oldUser = await this.prisma.user.findUnique({
      where: { email: dto.email }
    })

    if (oldUser) {
      return oldUser
    }
    const newUser = await this.prisma.user.create({
      data: {
        id: dto.id,
        loggedAt: this.LOGIN_DATE_EXPIRE,
        email: dto.email,
        login: dto.login,
        password: ""
      }
    })

    const { password, ...response } = newUser

    return response
  }

  private returnUserFields(user: Partial<User>) {
    return {
      id: user.id,
      loggedAt: user.loggedAt,
      email: user.email,
      login: user.login,
      role: user.role,
      code: user.code
    }
  }

  async issueTokens(userId: string) {
    const data = { id: userId }

    const accessToken = this.jwtServise.sign(data, {
      expiresIn: "1d"
    })

    const refreshToken = this.jwtServise.sign(data, {
      expiresIn: "3d"
    })

    return { accessToken, refreshToken }
  }

  async getNewTokens(refreshToken: string) {
    const oldToken = await this.jwtServise.verifyAsync(refreshToken)
    if (!oldToken) throw new UnauthorizedException("Invalid refresh token")

    const user = await this.userService.findById(oldToken.id)

    const tokens = await this.issueTokens(user.id)

    return { user: this.returnUserFields(user), ...tokens }
  }

  async validateUser(dto: LoginDto) {
    const user = await this.userService.findByEmailWithPassword(dto.email)
    if (!user) throw new NotFoundException("User not found!")

    if (!user.password) throw new UnauthorizedException(`Password is missing or invalid`)

    if (dto.password) {
      const isValid = await verify(user.password, dto.password)

      if (!isValid) throw new UnauthorizedException("Invalid password")
    }

    return this.returnUserFields(user)
  }

  addRefreshToken(res: Response, refreshToken: string) {
    const expiresIn = new Date()
    expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY)

    res.cookie(this.REFRESH_TOKEN, refreshToken, {
      httpOnly: true,
      domain: "localhost",
      expires: expiresIn,
      secure: true,
      sameSite: "lax"
    })
  }

  removeRefreshToken(res: Response) {
    res.cookie(this.REFRESH_TOKEN, "", {
      httpOnly: true,
      domain: "localhost",
      expires: new Date(0),
      secure: true,
      sameSite: "none"
    })
  }

  async generateSignInCode() {
    const code = Math.floor(100000 + Math.random() * 900000).toString()

    const expiration = new Date(Date.now() + 5 * 60000)

    return { code, expiration }
  }

  private async saveCodeByUserId(userId: string, code: string, expiration: Date) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { code, codeExpiration: expiration }
    })
  }

  private async getCodeByUserId(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { code: true, codeExpiration: true }
    })

    if (user && user.code && user.codeExpiration > new Date())
      return { code: user.code, expiration: user.codeExpiration }

    return null
  }

  private async deleteCodeByUserId(userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { code: null, codeExpiration: null }
    })
  }

  private isPastDate(loggedAt: Date) {
    return loggedAt < new Date()
  }
}
