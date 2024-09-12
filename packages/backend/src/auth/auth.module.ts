import { PrismaService } from "@/prisma.service"
import { UserService } from "@/user/user.service"
import { MailerModule } from "@nestjs-modules/mailer"
import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { JwtModule } from "@nestjs/jwt"
import { AuthController } from "./auth.controller"
import { AuthService } from "./auth.service"
import { getJwtConfig } from "./config/jwt.config"
import { getMailConfig } from "./config/mail.config"
import { SessionSerializer } from "./serializers/session.serialize"
import { GithubStrategy } from "./strategies/github.strategy"
import { GoogleStrategy } from "./strategies/google.strategy"
import { JwtStrategy } from "./strategies/jwt.strategy"

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMailConfig
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    UserService,
    JwtStrategy,
    GoogleStrategy,
    GithubStrategy,
    SessionSerializer
  ]
})
export class AuthModule {}
