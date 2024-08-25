import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PassportStrategy } from "@nestjs/passport"
import { Profile } from "passport"
import { Strategy } from "passport-google-oauth20"
import { AuthService } from "../auth.service"

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private configService: ConfigService
  ) {
    super({
      clientID: configService.get("GOOGLE_CLIENT_ID"),
      clientSecret: configService.get("GOOGLE_SECRET"),
      callbackURL: "http://localhost:4000/api/auth/google-login",
      scope: ["profile", "email"]
    })
  }

  async validate(at: string, rt: string, profile: Profile) {
    const user = await this.authService.google({
      id: profile.id,
      email: profile.emails[0].value,
      login: profile.displayName
    })

    return user || null
  }
}
