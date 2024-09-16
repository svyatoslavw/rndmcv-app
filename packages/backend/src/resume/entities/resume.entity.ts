import { returnUserObject } from "@/user/entities/user.entity"
import { ApiProperty } from "@nestjs/swagger"
import { Prisma, Resume } from "@prisma/client"

export class ResumeEntity implements Resume {
  @ApiProperty({ example: "1", description: "Resume ID" })
  id: string
  @ApiProperty({ example: "2022-01-01T00:00:00.000Z", description: "Resume creation date" })
  createdAt: Date
  @ApiProperty({ example: "2022-01-01T00:00:00.000Z", description: "Resume update date" })
  updatedAt: Date
  @ApiProperty({
    example: { color: "#ffffff", fontSize: "16px" },
    description: "Resume customization"
  })
  customization: Prisma.JsonValue
  @ApiProperty({
    example: { name: "John Doe", email: "Resume general" },
    description: "Resume update date"
  })
  general: Prisma.JsonValue
  @ApiProperty({ example: "34dr4-24fg4-sflh5", description: "User ID" })
  userId: string
}

export const returnResumeObject: Prisma.ResumeSelect = {
  id: true,
  createdAt: true,
  updatedAt: true,
  customization: true,
  general: true,
  user: { select: returnUserObject },
  userId: true
}
