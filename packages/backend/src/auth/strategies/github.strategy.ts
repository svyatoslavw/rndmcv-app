import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PassportStrategy } from "@nestjs/passport"
import { Profile } from "passport"
import { Strategy } from "passport-github2"
import { AuthService } from "../auth.service"

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private configService: ConfigService
  ) {
    super({
      clientID: configService.get("GITHUB_CLIENT_ID"),
      clientSecret: configService.get("GITHUB_SECRET"),
      callbackURL: "http://localhost:4000/api/auth/github-login",
      scope: ["profile", "user:email"]
    })
  }

  async validate(at: string, rt: string, profile: Profile) {
    console.log(profile)

    const user = await this.authService.google({
      id: profile.id,
      email: profile.emails[0].value,
      login: profile.username
    })

    return user || null
  }
}
