"use server"

import Stripe from "stripe"

import { RESPONSE_STATUS } from "../constants"
import { ICreateResume, IResumeResponse, IUpdateResume } from "../types"

import { CompletionAIModel } from "./ai"
import { auth } from "@/auth"
import { prisma } from "@/prisma"

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

export async function createResume(data: ICreateResume) {
  const session = await auth()

  if (!session || !session.user.email)
    return { status: RESPONSE_STATUS.ERROR, data: {} as IResumeResponse }

  const user = session.user

  if (!user) return { status: RESPONSE_STATUS.ERROR, data: {} as IResumeResponse }

  const resume = await prisma.resume.create({
    data: {
      general: data.general,
      customization: data.customization,
      user: { connect: { email: user.email } }
    },
    select: {
      id: true,
      customization: true,
      general: true,
      userId: true
    }
  })

  if (!resume) return { status: RESPONSE_STATUS.ERROR, data: {} as IResumeResponse }

  const formatedResume: IResumeResponse = {
    id: resume.id,
    general: JSON.stringify(resume.general),
    customization: JSON.stringify(resume.customization)
  }

  return { status: RESPONSE_STATUS.SUCCESS, data: formatedResume }
}

export async function updateResume(data: IUpdateResume) {
  const session = await auth()

  if (!session || !session.user.email) return { status: RESPONSE_STATUS.ERROR, data: {} }

  const resume = await prisma.resume.findUnique({
    where: {
      id: data.id,
      AND: { user: { email: session.user.email } }
    },
    select: {
      id: true
    }
  })

  if (!resume) return { status: RESPONSE_STATUS.ERROR, data: {} }

  const updatedResume = await prisma.resume.update({
    where: { id: resume.id },
    data: {
      general: data.general,
      customization: data.customization
    },
    select: {
      id: true,
      customization: true,
      general: true,
      userId: true
    }
  })

  return { status: RESPONSE_STATUS.SUCCESS, data: updatedResume }
}

export async function deleteResume(id: string) {
  const session = await auth()

  if (!session || !session.user.email) return { status: RESPONSE_STATUS.ERROR, data: {} }

  const resume = await prisma.resume.findUnique({
    where: {
      id,
      AND: { user: { email: session.user.email } }
    },
    select: {
      id: true
    }
  })

  if (!resume) return { status: RESPONSE_STATUS.ERROR, data: {} }

  const deletedResume = await prisma.resume.delete({
    where: { id: resume.id },
    select: {
      id: true,
      customization: true,
      general: true,
      userId: true
    }
  })

  return { status: RESPONSE_STATUS.SUCCESS, data: deletedResume }
}

export async function getResumesByUserId() {
  const session = await auth()

  if (!session || !session.user.email) return { status: RESPONSE_STATUS.ERROR, data: [] }

  const resumes = await prisma.resume.findMany({
    where: { user: { email: session.user.email } },
    select: {
      id: true,
      general: true,
      customization: true
    }
  })

  return { status: RESPONSE_STATUS.SUCCESS, data: resumes as IResumeResponse[] }
}

export async function generateSectionFields(fields: string, heading: string) {
  if (!fields || !heading) {
    throw new Error("Fields and heading is required.")
  }

  try {
    const prompt = `Based on the list of fields: ${fields}, generate a JSON object for the section "${heading.split(" ")[1]}". If your fields include startDate or endDate, set them to a string in the format “2024-11-03T21:00:00.000Z”. If there is a level field, set it to a value between 1 and 5 (as string). All other fields must be strings. The data must be detailed, including a description if it is included among the fields. Do not include the section name in the object. Output only a JSON object with fields: ${fields} - without additional information or comments. Without your extra words, like Here is the generated JSON object...`
    const result = await CompletionAIModel(prompt)

    console.log("@result", result)

    return typeof result === "string" ? JSON.parse(result) : result
  } catch (err) {
    throw err
  }
}
