import { Resume } from "@prisma/client"

import { CreateResume, Response, UpdateResume } from "../domain"

import { auth } from "@/auth"
import { prisma } from "@/prisma"
import { RESPONSE_MESSAGE, RESPONSE_STATUS } from "@/shared/constants"

class ResumeRepository {
  async create(data: CreateResume) {
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

  async updateResume(data: UpdateResume) {
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

  async delete(id: string) {
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

    return returnOnSuccess(dbResumeToResponse(resume))
  }

  async getResumesByUserId() {
    const session = await auth()

    if (!session || !session.user.email) return returnOnError(RESPONSE_MESSAGE.NOT_FOUND("User"))

    const resumes = await prisma.resume.findMany({
      where: { user: { email: session.user.email } }
    })

    return returnOnSuccess(resumes.map(dbResumeToResponse))
  }
}

function dbResumeToResponse(resume: Partial<Resume>): Response {
  return {
    id: resume.id as string,
    general: JSON.stringify(resume.general),
    customization: JSON.stringify(resume.customization)
  }
}

function returnOnError(message: string) {
  return { status: RESPONSE_STATUS.ERROR, message, data: {} as Response }
}

function returnOnSuccess(data: Response | Response[]) {
  return {
    status: RESPONSE_STATUS.SUCCESS,
    message: RESPONSE_STATUS.SUCCESS,
    data
  }
}

export const resumeRepository = new ResumeRepository()
