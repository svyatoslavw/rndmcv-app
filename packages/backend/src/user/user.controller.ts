import { Auth } from "@/auth/decorators/auth.decorator"
import { CurrentUser } from "@/auth/decorators/user.decorator"
import { Controller, Get } from "@nestjs/common"
import { ApiParam, ApiResponse } from "@nestjs/swagger"
import { UserType } from "./entities/user.entity"
import { UserService } from "./user.service"

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return this.userService.getAll()
  }

  @ApiResponse({ status: 200, type: UserType })
  @ApiParam({ name: "id", type: String, description: "User ID" })
  @Get("profile")
  @Auth()
  async profile(@CurrentUser("id") id: string) {
    return this.userService.findById(id)
  }
}
