import { PrismaService } from "@/prisma.service"
import { UserService } from "@/user/user.service"
import { Module } from "@nestjs/common"
import { ResumeController } from "./resume.controller"
import { ResumeService } from "./resume.service"

@Module({
  controllers: [ResumeController],
  providers: [ResumeService, PrismaService, UserService]
})
export class ResumeModule {}
