import { Controller, Headers, Post, Req, Res } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { Response } from "express"
import { RequestWithRawBody } from "./middlewares/subscription.middleware"
import { SubscriptionService } from "./subscription.service"

@ApiTags("Subscriptions")
@Controller("subscriptions")
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post()
  async create(
    @Headers("stripe-signature") signature: string,
    @Req() req: RequestWithRawBody,
    @Res() res: Response
  ) {
    return this.subscriptionService.payment(signature, req, res)
  }
}
