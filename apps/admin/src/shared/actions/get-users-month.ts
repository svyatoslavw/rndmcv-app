"use server"

import { prisma } from "@rndm/database"

export async function getUsersMonth() {
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

  const newUsers = await prisma.user.count({
    where: {
      createdAt: {
        gte: startOfMonth,
        lte: now
      }
    }
  })

  return newUsers
}
