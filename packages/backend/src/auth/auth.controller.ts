import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
  UsePipes,
  ValidationPipe
} from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger"
import { Request, Response } from "express"
import { AuthService } from "./auth.service"
import { ConfirmationDto, LoginDto, RegisterDto } from "./dto/auth.dto"
import { AuthResponse, ConfirmationResponse } from "./entities/auth.entity"
import { GithubGuard } from "./guards/github.guard"
import { GoogleGuard } from "./guards/google.guard"

@ApiTags("Authorization")
@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtServise: JwtService
  ) {}

  @ApiOperation({ summary: "Register new user" })
  @ApiResponse({ status: 200, type: AuthResponse })
  @ApiParam({ name: "Register dto", type: RegisterDto })
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post("register")
  async register(@Body() dto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    const { refreshToken, ...response } = await this.authService.register(dto)
    this.authService.addRefreshToken(res, refreshToken)

    return response
  }

  @ApiOperation({
    summary: "Email confirmation",
    description: "Send email with otp code"
  })
  @ApiResponse({ status: 200, type: ConfirmationResponse })
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: "Confirmation dto", type: ConfirmationDto })
  @HttpCode(200)
  @Post("confirmation")
  async confirmation(@Body() dto: ConfirmationDto, @Res({ passthrough: true }) res: Response) {
    const result = await this.authService.confirmation(dto)

    if (result && "refreshToken" in result) {
      const { refreshToken, ...response } = result
      this.authService.addRefreshToken(res, refreshToken)
      return response
    }
    return result
  }

  @ApiOperation({ summary: "Login by email" })
  @ApiResponse({ status: 200, type: AuthResponse })
  @ApiParam({ name: "Login dto", type: LoginDto })
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post("login")
  async emailLogin(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const result = await this.authService.login(dto)

    if (result && "refreshToken" in result) {
      const { refreshToken, ...response } = result
      this.authService.addRefreshToken(res, refreshToken)
      return response
    }
    return result
  }

  @UseGuards(GoogleGuard)
  @Get("google-init")
  async googleLogin(@Req() req: Request, @Res() res: Response) {
    return { message: "Google Auth" }
  }

  @UseGuards(GoogleGuard)
  @Get("google-login")
  async googleRedirect(@Req() req: Request, @Res() res: Response) {
    return this.authService.oAuthLogin(req, res)
  }

  @UseGuards(GithubGuard)
  @Get("github-init")
  async githubLogin(@Req() req: Request, @Res() res: Response) {
    return { message: "Github Auth" }
  }
  @UseGuards(GithubGuard)
  @Get("github-login")
  async githubRedirect(@Req() req: Request, @Res() res: Response) {
    return this.authService.oAuthLogin(req, res)
  }

  @ApiOperation({ summary: "Get new access and refresh tokens" })
  @ApiResponse({ status: 200, type: AuthResponse })
  @HttpCode(200)
  @Post("login/access-token")
  async getNewTokens(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const tokenFromCookies = req.cookies[this.authService.REFRESH_TOKEN]

    if (!tokenFromCookies) {
      this.authService.removeRefreshToken(res)
      throw new UnauthorizedException("Refresh token not passed")
    }

    const { refreshToken, ...response } = await this.authService.getNewTokens(tokenFromCookies)

    this.authService.addRefreshToken(res, refreshToken)

    return response
  }

  @ApiOperation({ summary: "Logout from system" })
  @ApiResponse({ status: 200, type: Boolean })
  @HttpCode(200)
  @Post("logout")
  async logout(@Res({ passthrough: true }) res: Response) {
    this.authService.removeRefreshToken(res)
    return true
  }
}
