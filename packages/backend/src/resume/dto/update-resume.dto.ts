import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class UpdateResumeDto {
  @ApiProperty({ example: "849sd-defk3-24422", description: "Resume Id" })
  @IsString()
  id: string

  @ApiProperty({
    example: { name: "John Doe", email: "example@gmail.com" },
    description: "Resume personal details"
  })
  @IsString()
  general: string

  @ApiProperty({
    example: { color: "#ffffff", fontSize: "16px" },
    description: "Resume customization details"
  })
  @IsString()
  customization: string
}
