import { Module } from "@nestjs/common"
import { PassportModule } from "@nestjs/passport"
import { AuthModule } from "./auth/auth.module"
import { PrismaService } from "./prisma.service"
import { UserModule } from "./user/user.module"
import { ConfigModule } from "@nestjs/config"

@Module({
  imports: [
    UserModule,
    AuthModule,
    PassportModule.register({ session: true }),
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` })
  ],
  providers: [PrismaService]
})
export class AppModule {}
