"use server"

import { prisma } from "@/prisma"
import { ICreateResumeDto } from "./types"

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
