"use server"

import Stripe from "stripe"

import { ICreateResumeDto } from "./types"
import { prisma } from "@/prisma"

export async function createResume(data: ICreateResumeDto) {
  const user = await prisma.user.findUnique({
    where: {
      id: data.userId
    },
    select: {
      id: true
    }
  })

  if (!user) return

  return prisma.resume.create({
    data: {
      general: data.general,
      customization: data.customization,
      user: { connect: { id: user.id } }
    },
    select: {
      customization: true,
      general: true,
      id: true,
      user: true,
      userId: true
    }
  })
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function checkout(
  email: string,
  items: {
    product: { price_id: string }
  }[]
) {
  const lineItems = items.map((item) => ({
    price: item.product.price_id,
    quantity: 1
  }))

  return JSON.stringify(
    await stripe.checkout.sessions.create({
      success_url: process.env.APP_URL,
      cancel_url: process.env.APP_URL,
      customer_email: email,
      line_items: lineItems,
      mode: "subscription"
    })
  )
}

export async function manageBilling(customer: string) {
  return JSON.stringify(
    await stripe.billingPortal.sessions.create({
      customer,
      return_url: process.env.APP_URL
    })
  )
}
