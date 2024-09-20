import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString, MinLength } from "class-validator"

export class UpdateUserDto {
  @ApiProperty({ example: "John", description: "User login" })
  @MinLength(3, { message: "Login must be at least 3 characters" })
  @IsString()
  login: string

  @ApiProperty({ example: "user@example.com", description: "User email" })
  @MinLength(4, { message: "Email must be at least 4 characters" })
  @IsString()
  email: string

  @ApiProperty({ example: "https://test.png", description: "User image" })
  @IsString()
  image: string

  @ApiProperty({ example: "*secret*", description: "User old password" })
  @IsOptional()
  @IsString()
  oldPassword?: string

  @ApiProperty({ example: "*secret*", description: "User new password" })
  @IsOptional()
  @IsString()
  newPassword?: string
}
