import { Body, Controller, Headers, Patch, Post, Req, Res } from "@nestjs/common"
import { ApiCreatedResponse, ApiHeader, ApiOkResponse, ApiParam, ApiTags } from "@nestjs/swagger"
import { Response } from "express"
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto"
import { SubscriptionEntity } from "./entities/subscription.entity"
import { RequestWithRawBody } from "./middlewares/subscription.middleware"
import { SubscriptionService } from "./subscription.service"

@ApiTags("Subscriptions")
@Controller("subscriptions")
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post()
  @ApiCreatedResponse({ type: SubscriptionEntity })
  @ApiHeader({ name: "stripe-signature", required: true })
  async create(
    @Headers("stripe-signature") signature: string,
    @Req() req: RequestWithRawBody,
    @Res() res: Response
  ) {
    return this.subscriptionService.payment(signature, req, res)
  }

  @ApiOkResponse({ type: SubscriptionEntity })
  @ApiParam({ name: "dto", type: UpdateSubscriptionDto })
  @Patch()
  async update(@Body() dto: UpdateSubscriptionDto) {
    return this.subscriptionService.update(dto)
  }

  @ApiParam({ name: "customerId", type: String })
  @Post("manage")
  async manage(@Res() res: Response, @Body() body: { customerId: string }) {
    return this.subscriptionService.manage(res, body.customerId)
  }
}
