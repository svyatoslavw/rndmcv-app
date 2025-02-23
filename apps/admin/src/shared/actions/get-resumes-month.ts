"use server"

import { prisma } from "@rndm/database"

export async function getResumesMonth() {
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

  const resumes = await prisma.resume.count({
    where: {
      createdAt: {
        gte: startOfMonth,
        lte: now
      }
    }
  })

  return resumes
}
