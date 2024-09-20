import { ConfigService } from "@nestjs/config"
import { ThrottlerModuleOptions } from "@nestjs/throttler"

export const getUploadConfig = async (
  configService: ConfigService
): Promise<ThrottlerModuleOptions> => [
  {
    ttl: configService.get("UPLOAD_RATE_TTL"),
    limit: configService.get("UPLOAD_RATE_LIMIT")
  }
]
