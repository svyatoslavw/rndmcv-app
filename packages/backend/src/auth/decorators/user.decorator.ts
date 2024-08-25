import { createParamDecorator, ExecutionContext } from "@nestjs/common"
import type { User } from "@prisma/client"

export const CurrentUser = createParamDecorator((data: keyof User, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  const user = request.user

  if (!user) {
    throw new Error("User not authenticated or user data is missing")
  }

  return data ? user[data] : user
})
