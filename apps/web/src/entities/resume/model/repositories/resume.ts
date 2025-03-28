"use server"

import { EnumResumeVisibility, Resume } from "@rndm/database"

import { RESPONSE_MESSAGE, RESPONSE_STATUS } from "@/shared/constants"
import { CreateResume, IResumeResponse, UpdateResume } from "@/shared/types"

import { auth } from "@/auth"
import { prisma } from "@rndm/database"

export async function createResumeService(data: CreateResume) {
  const session = await auth()

  if (!session || !session.user.email) return returnOnError(RESPONSE_MESSAGE.NOT_FOUND("User"))

  const user = session.user

  if (!user) return returnOnError(RESPONSE_MESSAGE.UNAUTHORIZED)

  const resume = await prisma.resume.create({
    data: {
      general: data.general,
      customization: data.customization,
      user: { connect: { email: user.email } }
    }
  })

  if (!resume) return returnOnError(RESPONSE_MESSAGE.CUSTOM("Failed to create Resume"))

  return returnOnSuccess(dbResumeToResponse(resume))
}

export async function updateResumeService(data: UpdateResume) {
  const session = await auth()

  if (!session || !session.user.email) return returnOnError(RESPONSE_MESSAGE.NOT_FOUND("User"))

  const existingResume = await prisma.resume.findUnique({
    where: {
      id: data.id,
      AND: { user: { email: session.user.email } }
    }
  })

  if (!existingResume) return returnOnError(RESPONSE_MESSAGE.NOT_FOUND("Resume"))

  const resume = await prisma.resume.update({
    where: { id: existingResume.id },
    data: {
      general: data.general,
      customization: data.customization
    }
  })

  return returnOnSuccess(dbResumeToResponse(resume))
}

export async function deleteResumeService(id: string) {
  const session = await auth()

  if (!session || !session.user.email) return returnOnError(RESPONSE_MESSAGE.NOT_FOUND("User"))

  const existingResume = await prisma.resume.findUnique({
    where: {
      id,
      AND: { user: { email: session.user.email } }
    }
  })

  if (!existingResume) return returnOnError(RESPONSE_MESSAGE.NOT_FOUND("Resume"))

  const resume = await prisma.resume.delete({
    where: { id: existingResume.id }
  })
  console.log("@resume-server", resume)

  return returnOnSuccess(dbResumeToResponse(resume))
}

export async function getResumesByUserIdService() {
  const session = await auth()

  if (!session || !session.user.email) return returnOnError(RESPONSE_MESSAGE.NOT_FOUND("User"))

  const resumes = await prisma.resume.findMany({
    where: { user: { email: session.user.email } }
  })

  return returnOnSuccessArray(resumes.map(dbResumeToResponse))
}

export async function changeResumeStatusService(id: string, type: EnumResumeVisibility) {
  const session = await auth()

  if (!session || !session.user.email) return returnOnError(RESPONSE_MESSAGE.NOT_FOUND("User"))

  const resume = await prisma.resume.findUnique({
    where: {
      id,
      AND: { user: { email: session.user.email } }
    }
  })

  if (!resume) return returnOnError(RESPONSE_MESSAGE.NOT_FOUND("Resume"))

  const updatedResume = await prisma.resume.update({
    where: { id: resume.id },
    data: { type }
  })

  if (!updatedResume) return returnOnError(RESPONSE_MESSAGE.CUSTOM("Failed to update resume"))

  return returnOnSuccess(dbResumeToResponse(updatedResume))
}

function dbResumeToResponse(resume: Resume): IResumeResponse {
  return {
    id: resume.id as string,
    general: JSON.stringify(resume.general),
    customization: JSON.stringify(resume.customization)
  }
}

function returnOnError(message: string) {
  return { status: RESPONSE_STATUS.ERROR, message, data: {} as IResumeResponse }
}

function returnOnSuccess(data: IResumeResponse) {
  return {
    status: RESPONSE_STATUS.SUCCESS,
    message: RESPONSE_STATUS.SUCCESS,
    data
  }
}

function returnOnSuccessArray(data: IResumeResponse[]) {
  return {
    status: RESPONSE_STATUS.SUCCESS,
    message: RESPONSE_STATUS.SUCCESS,
    data
  }
}
