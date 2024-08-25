import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { User } from "@prisma/client"

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<UserRoleType[]>("roles", context.getHandler())

    if (!roles) {
      return true
    }

    const request = context.switchToHttp().getRequest<{ user: User }>()
    const user = request.user

    if (!user || !roles.includes(user.role)) {
      throw new ForbiddenException("Вы не админ")
    }

    return true
  }
}
