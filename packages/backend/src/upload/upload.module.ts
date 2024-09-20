import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { UploadController } from "./upload.controller"
import { UploadService } from "./upload.service"

@Module({
  imports: [
    ConfigModule
    // ThrottlerModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: getUploadConfig
    // })
  ],
  controllers: [UploadController],
  providers: [
    UploadService
    // {
    //   provide: APP_GUARD,
    //   useClass: ThrottlerGuard
    // }
  ]
})
export class UploadModule {}
