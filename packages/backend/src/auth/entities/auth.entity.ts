import { UserType } from "@/user/entities/user.entity"
import { ApiProperty } from "@nestjs/swagger"

export class AuthResponse {
  @ApiProperty({ example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", description: "Access token" })
  accessToken: string
  @ApiProperty({ type: UserType })
  user: UserType
}

export class ConfirmationResponse {
  @ApiProperty({ example: "505349", description: "Confirmation Code" })
  code: string | null
  @ApiProperty({ example: "2022-01-01T00:00:00.000Z", description: "Confirmation Code Expiration" })
  codeExpiration: Date | null
}
