import { ApiProperty } from "@nestjs/swagger"
import { $Enums, Prisma, Subscription } from "@prisma/client"

export class SubscriptionEntity implements Subscription {
  @ApiProperty({ example: "1", description: "Resume ID" })
  id: string
  @ApiProperty({ example: "2022-01-01T00:00:00.000Z", description: "Subscription creation date" })
  createdAt: Date
  @ApiProperty({ example: "2022-01-01T00:00:00.000Z", description: "Subscription update date" })
  updatedAt: Date
  @ApiProperty({ example: "2022-01-01T00:00:00.000Z", description: "Subscription expiration date" })
  expiresAt: Date
  @ApiProperty({
    example: 5.99,
    description: "Subscription price"
  })
  price: number
  @ApiProperty({ example: "BASIC", description: "Subscription type" })
  type: $Enums.EnumSubscriptionType
  @ApiProperty({ example: "34dr4-24fg4-sflh5", description: "User id" })
  userId: string
}

export const returnSubscriptionObject: Prisma.SubscriptionSelect = {
  id: true,
  createdAt: true,
  updatedAt: true,
  expiresAt: true,
  price: true,
  type: true,
  user: true,
  userId: true
}
