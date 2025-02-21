// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation
import type { UserRole } from "@rndm/database"
import "next-auth"

import type { IUser } from "./src/shared/types"

declare module "next-auth" {
  interface Session {
    user: IUser
  }

  // interface User extends DefaultUser {
  //   id: string
  //   role: UserRole
  // }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string
    role: UserRole
  }
}
