import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString, MinLength } from "class-validator"

export class UpdateUserDto {
  @ApiProperty({ example: "John", description: "User login" })
  @MinLength(3, { message: "Login must be at least 3 characters" })
  @IsOptional()
  @IsString()
  login?: string

  @ApiProperty({ example: "user@example.com", description: "User email" })
  @MinLength(4, { message: "Email must be at least 4 characters" })
  @IsOptional()
  @IsString()
  email?: string

  @ApiProperty({ example: "*secret*", description: "User password" })
  @MinLength(8, { message: "Email must be at least 8 characters" })
  @IsOptional()
  @IsString()
  password?: string
}
