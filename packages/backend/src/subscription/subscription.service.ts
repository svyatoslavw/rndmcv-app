import { PrismaService } from "@/prisma.service"
import { UserService } from "@/user/user.service"
import { Injectable, NotFoundException } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { Response } from "express"
import Stripe from "stripe"
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto"
import { formatToPrice, getTypeFromPrice, setSubscriptionDate } from "./helpers/subscription.helper"
import { RequestWithRawBody } from "./middlewares/subscription.middleware"

@Injectable()
export class SubscriptionService {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
    private userService: UserService
  ) {}

  async create(email: string) {
    return this.prisma.subscription.create({
      data: {
        type: "BASIC",
        expiresAt: setSubscriptionDate("BASIC"),
        price: 0,
        user: { connect: { email } }
      }
    })
  }

  async update(dto: UpdateSubscriptionDto) {
    const user = await this.userService.getByEmail(dto.email)
    if (!user) throw new NotFoundException("User not found")

    return this.prisma.subscription.update({
      where: { userId: user.id },
      data: {
        type: getTypeFromPrice(dto.total),
        expiresAt: setSubscriptionDate(getTypeFromPrice(dto.total)),
        price: formatToPrice(dto.total),
        user: { connect: { id: user.id } }
      }
    })
  }

  async payment(signature: string, req: RequestWithRawBody, res: Response) {
    const stripe = new Stripe(this.configService.get("STRIPE_SECRET_KEY"), {
      apiVersion: "2024-06-20"
    })

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        this.configService.get("STRIPE_WEBHOOK_SECRET")
      )
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`)
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object
        const data = { email: session.customer_email, total: session.amount_total }

        await this.update(data)
        break
      }
      case "payment_intent.succeeded": {
        break
      }
      default:
        break
    }

    return res.json({ received: true })
  }
}
