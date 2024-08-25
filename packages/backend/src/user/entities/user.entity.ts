import { ApiProperty } from "@nestjs/swagger"
import { $Enums, Prisma, User } from "@prisma/client"

export class UserType implements User {
  @ApiProperty({ example: "1", description: "User ID" })
  id: string
  @ApiProperty({ example: "2022-01-01T00:00:00.000Z", description: "User creation date" })
  createdAt: Date
  @ApiProperty({ example: "2022-01-01T00:00:00.000Z", description: "User update date" })
  updatedAt: Date
  @ApiProperty({ example: "2022-01-01T00:00:00.000Z", description: "User last login date" })
  loggedAt: Date
  @ApiProperty({ example: "test@example.com", description: "User Email" })
  email: string
  @ApiProperty({ example: "John", description: "User Login" })
  login: string
  @ApiProperty({ example: "test", description: "User Password" })
  password: string
  @ApiProperty({
    example: $Enums.UserRole.USER,
    description: "User Role",
    enum: $Enums.UserRole
  })
  role: $Enums.UserRole
  @ApiProperty({ example: "505349", description: "Confirmation Code" })
  code: string | null
  @ApiProperty({ example: "2022-01-01T00:00:00.000Z", description: "Confirmation Code Expiration" })
  codeExpiration: Date | null
}

export const returnUserObject: Prisma.UserSelect = {
  id: true,
  loggedAt: true,
  createdAt: true,
  email: true,
  login: true,
  role: true,
  code: true,
  codeExpiration: true
}
