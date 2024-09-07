import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { PassportModule } from "@nestjs/passport"
import { AuthModule } from "./auth/auth.module"
import { PrismaService } from "./prisma.service"
import { ResumeModule } from "./resume/resume.module"
import { SubscriptionModule } from "./subscription/subscription.module"
import { UserModule } from "./user/user.module"

@Module({
  imports: [
    UserModule,
    AuthModule,
    PassportModule.register({ session: true }),
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    ResumeModule,
    SubscriptionModule
  ],
  providers: [PrismaService]
})
export class AppModule {}
