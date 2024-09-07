import { PrismaService } from "@/prisma.service"
import { UserService } from "@/user/user.service"
import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { SubscriptionController } from "./subscription.controller"
import { SubscriptionService } from "./subscription.service"

@Module({
  imports: [ConfigModule],
  controllers: [SubscriptionController],
  providers: [SubscriptionService, PrismaService, UserService]
})
export class SubscriptionModule {}
