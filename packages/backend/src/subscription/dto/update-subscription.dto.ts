import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNumber } from "class-validator"

export class UpdateSubscriptionDto {
  @ApiProperty({ example: "example@example.com", description: "Email" })
  @IsEmail({}, { message: "Email is required" })
  email: string

  @ApiProperty({ example: "$5.99", description: "Total" })
  @IsNumber()
  total: number
}
