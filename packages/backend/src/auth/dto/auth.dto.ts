import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator"

export class RegisterDto {
  @ApiProperty({ example: "example@example.com", description: "Email" })
  @IsEmail({}, { message: "Email is required" })
  email: string

  @ApiProperty({ example: "Admin", description: "Login" })
  @IsString({ message: "Login is required" })
  @MinLength(1, { message: "Login is required" })
  @MaxLength(18, { message: "Login cannot be longer than 18 characters" })
  login: string

  @ApiProperty({ example: "12345678", description: "Password" })
  @IsString({ message: "Password must have at least 8 characters" })
  @MinLength(8, { message: "Password must have at least 8 characters" })
  password: string
}

export class LoginDto {
  @ApiProperty({ example: "example@example.com", description: "Email or login" })
  @IsString({ message: "Login or Email is required" })
  @MinLength(1, { message: "Login or Email is required" })
  @MaxLength(30, { message: "Login or Email cannot be longer than 30 characters" })
  email: string

  @ApiProperty({ example: "12345678", description: "Password" })
  @IsString({ message: "Password must have at least 6 characters" })
  @MinLength(8, { message: "Password must have at least 8 characters" })
  password: string
}

export class ConfirmationDto {
  @ApiProperty({ example: "example@example.com", description: "Email or login" })
  @IsString({ message: "Credential is required" })
  @MinLength(1, { message: "Credential is required" })
  @MaxLength(30, { message: "Credential cannot be longer than 30 characters" })
  email: string

  @ApiProperty({ example: "505349", description: "Confirmation code" })
  @IsString({ message: "Code must have at least 6 characters" })
  @MinLength(6, { message: "Code must have at least 6 characters" })
  code: string
}

export class GoogleDto {
  @IsString({ message: "ID is required" })
  @MinLength(1, { message: "ID is required" })
  id: string

  @IsEmail({}, { message: "Email is required" })
  email: string

  @IsString({ message: "Login is required" })
  @MinLength(1, { message: "Login is required" })
  login: string
}
