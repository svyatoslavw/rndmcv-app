import { headers } from "next/headers"
import { buffer } from "node:stream/consumers"
import Stripe from "stripe"

import { prisma } from "@/prisma"
import { UpdateSubscription } from "@/shared/lib/types"
import { formatToPrice, getTypeFromPrice, setSubscriptionDate } from "@/shared/lib/utils"

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: any) {
  const rawBody = await buffer(req.body)
  try {
    const sig = headers().get("stripe-signature")
    let event
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret)
    } catch (err: any) {
      return Response.json({ error: `Webhook Error ${err?.message!} ` })
    }
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object
        await checkout(session)
        break
      }
      case "customer.subscription.deleted": {
        const session = event.data.object
        await cancel(session)
        break
      }
      case "customer.subscription.updated": {
        const session = event.data.object
        update(session)
        break
      }
      default:
        break
    }
    return Response.json({})
  } catch (e) {
    return Response.json({ error: `Webhook Error` })
  }
}

async function checkout(session: Stripe.Checkout.Session) {
  if (!session || !session.customer_email || !session.amount_total || !session.customer) {
    return Response.json({ error: "Session not found" })
  }

  const data: UpdateSubscription = {
    email: session.customer_email,
    total: session.amount_total,
    customerId: session.customer as string
  }

  const user = await prisma.user.findUnique({
    where: { email: data.email },
    select: { id: true }
  })

  if (!user) {
    return Response.json({ error: "User not found" })
  }

  await prisma.subscription.update({
    where: { userId: user.id },
    data: {
      type: getTypeFromPrice(data.total),
      expiresAt: setSubscriptionDate(getTypeFromPrice(data.total), data.total),
      price: formatToPrice(data.total),
      customerId: data.customerId,
      user: { connect: { id: user.id } }
    }
  })
}
async function cancel(data: Stripe.Subscription) {
  const subscription = await prisma.subscription.findUnique({
    where: { customerId: data.customer as string },
    select: { customerId: true }
  })

  if (!subscription) {
    return Response.json({ error: "Subscription not found" })
  }

  await prisma.subscription.update({
    where: { customerId: subscription.customerId as string },
    data: {
      type: "BASIC",
      expiresAt: setSubscriptionDate("BASIC", 0),
      price: 0
    }
  })

  return Response.json({})
}

async function update(data: Stripe.Subscription) {
  const price = data.items.data[0].price.unit_amount // / 100 цена в центах

  if (!price) {
    return Response.json({ error: "Price not found" })
  }

  const subscription = await prisma.subscription.findUnique({
    where: { customerId: data.customer as string },
    select: { customerId: true }
  })

  if (!subscription) {
    return Response.json({ error: "Subscription not found" })
  }

  await prisma.subscription.update({
    where: { customerId: subscription.customerId as string },
    data: {
      type: getTypeFromPrice(price),
      price,
      expiresAt: setSubscriptionDate(getTypeFromPrice(price), price)
    }
  })

  return Response.json({})
}
