import { Auth } from "@/auth/decorators/auth.decorator"
import { CurrentUser } from "@/auth/decorators/user.decorator"
import { Body, Controller, Get, Patch } from "@nestjs/common"
import { ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger"
import { UpdateUserDto } from "./dto/user.dto"
import { UserEntity } from "./entities/user.entity"
import { UserService } from "./user.service"

@ApiTags("Users")
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return this.userService.getAll()
  }

  @ApiResponse({ status: 200, type: UserEntity })
  @ApiParam({ name: "id", type: String, description: "user id" })
  @Get("profile")
  @Auth()
  async profile(@CurrentUser("id") id: string) {
    return this.userService.getById(id)
  }

  @ApiResponse({ status: 200, type: UserEntity })
  @ApiParam({ name: "id", type: String, description: "user id" })
  @ApiParam({ name: "dto", type: UpdateUserDto, description: "update dto" })
  @Patch("profile")
  @Auth()
  async update(@Body() dto: UpdateUserDto, @CurrentUser("id") id: string) {
    return this.userService.update(dto, id)
  }
}
