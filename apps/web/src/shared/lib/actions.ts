"use server"

import { RESPONSE_STATUS } from "../constants"
import { ICreateResume, IResumeResponse, IUpdateResume } from "../types"

import { auth } from "@/auth"
import { prisma } from "@rndm/database"
import { cookies } from "next/headers"
import { ATSAIModel, CompletionAIModel, TemplateAIModel } from "./ai"

export async function createResume(data: ICreateResume) {
  const session = await auth()
  const cookieStore = await cookies()

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

  const resumesCount = await prisma.resume.count({
    where: { user: { email: session.user.email } }
  })

  cookieStore.set("rndmcv.resumes", resumesCount.toString(), {
    path: "/"
  })

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
  const cookieStore = await cookies()

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

  const resumesCount = await prisma.resume.count({
    where: { user: { email: session.user.email } }
  })

  cookieStore.set("rndmcv.resumes", resumesCount.toString(), {
    maxAge: 60 * 60 * 24 * 30,
    path: "/"
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

export async function changeDescriptionInBlock(description: string) {
  const prompt = `Change the description in the resume block to make it more ATS-friendly and understandable to the HR reviewer. The block is: ${description}`
  const result = await CompletionAIModel(prompt)

  return result
}

export async function generateTemplate(prompt: string) {
  const result = await TemplateAIModel(prompt)

  return typeof result === "string" ? JSON.parse(result) : result
}

export const analyzeATSResume = async (resume: string) => {
  const prompt = `Analyze ATS resume: ${resume}`
  const result = await ATSAIModel(prompt)

  return typeof result === "string" ? JSON.parse(result) : result
}
