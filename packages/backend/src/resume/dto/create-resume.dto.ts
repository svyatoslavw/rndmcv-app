import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateResumeDto {
  @ApiProperty({
    example: { name: "John Doe", email: "example@gmail.com" },
    description: "Resume personal details"
  })
  @IsString()
  general: string

  @IsString()
  @ApiProperty({
    example: { color: "#ffffff", fontSize: "16px" },
    description: "Resume customization details"
  })
  customization: string
}
