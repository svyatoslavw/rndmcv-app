import { MailerOptions } from "@nestjs-modules/mailer"
import { ConfigService } from "@nestjs/config"

export const getMailConfig = async (configService: ConfigService): Promise<MailerOptions> => {
  const host = configService.get<string>("MAILER_HOST")
  const user = configService.get<string>("MAILER_USER")
  const password = configService.get<string>("MAILER_PASSWORD")

  return {
    transport: {
      host,
      auth: {
        user,
        pass: password
      }
    }
  }
}
