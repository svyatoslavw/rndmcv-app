"use server"

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
  console.log("@user", user)

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
