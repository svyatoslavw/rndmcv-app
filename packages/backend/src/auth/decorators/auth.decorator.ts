import { SetMetadata, UseGuards, applyDecorators } from "@nestjs/common"
import { UserRole } from "@prisma/client"
import { JwtGuard } from "../guards/jwt.guard"
import { RolesGuard } from "../guards/roles.guard"

export const Auth = (...roles: UserRoleType[]) => {
  const finalRoles = roles.length > 0 ? roles : Object.values(UserRole)
  const guards = finalRoles.includes(UserRole.USER) ? [JwtGuard] : [JwtGuard, RolesGuard]

  return applyDecorators(SetMetadata("roles", finalRoles), UseGuards(...guards))
}
