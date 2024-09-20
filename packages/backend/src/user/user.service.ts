import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from "@nestjs/common"
import { User } from "@prisma/client"
import { hash, verify } from "argon2"
import { PrismaService } from "src/prisma.service"
import { UpdateUserDto } from "./dto/user.dto"
import { returnUserObject } from "./entities/user.entity"

@Injectable()
export class UserService {
  LOGIN_DATE_EXPIRE = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)

  constructor(private prisma: PrismaService) {}

  async getAll() {
    const users = await this.prisma.user.findMany({
      select: returnUserObject
    })
    if (!users) throw new NotFoundException("Users not found")
    return users
  }

  async getById(id: string, select = returnUserObject) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select
    })

    if (!user) throw new NotFoundException("User with this id not found")
    return user
  }

  async getByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
      select: returnUserObject
    })
  }

  async getByLogin(login: string) {
    return await this.prisma.user.findUnique({
      where: { login },
      select: returnUserObject
    })
  }

  async getByEmailWithPassword(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
      select: {
        ...returnUserObject,
        password: true
      }
    })
  }

  async getProfile(id: string) {
    return this.getById(id)
  }

  async updateLastLoginDateById(id: string) {
    const user = await this.getById(id)

    if (!user) throw new NotFoundException("User not found")

    return this.prisma.user.update({
      where: { id: user.id },
      data: {
        loggedAt: this.LOGIN_DATE_EXPIRE
      }
    })
  }

  async update(dto: UpdateUserDto, id: string) {
    const user = await this.getById(id, { id: true, password: true })
    if (!user) throw new NotFoundException("User not found")

    if (dto.email) {
      const isExistEmail = await this.getByEmail(dto.email)
      if (isExistEmail) throw new BadRequestException("User with this email already exists")
    }

    if (dto.login) {
      const isExistLogin = await this.getByLogin(dto.login)
      if (isExistLogin) throw new BadRequestException("User with this login already exists")
    }

    const data: Partial<User> = { login: dto.login, email: dto.email, image: dto.image }

    if (dto.oldPassword && dto.newPassword) {
      const isValidPassword = await verify(user.password, dto.oldPassword)

      if (!isValidPassword) throw new UnauthorizedException("Wrong password")
      data.password = await hash(dto.newPassword)
    }

    return this.prisma.user.update({
      where: { id: user.id },
      select: returnUserObject,
      data
    })
  }
}
