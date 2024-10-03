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

const promptExplanation = `Create a survey object with fields: Educational institution (field "school") (string) for the "Education" section, degree (string) for the "Education" section, city(string), country(string), startDate(string, for example "2024-09-29T21:00:00.000Z") and endDate(string, for example "2024-09-29T21:00:00.000Z")`

export async function generateResumeSection() {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY!

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      method: "POST",
      body: JSON.stringify({
        temperature: 0.7,
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: promptExplanation
          }
        ]
      })
    })
    const json = await response.json()

    return {
      message: "success",
      data: { json }
    }
  } catch (e) {
    return {
      message: "Failed to create form"
    }
  }
}
