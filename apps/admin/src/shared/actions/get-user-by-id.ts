"use server"

import { prisma } from "@rndm/database"

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: { id: true, image: true, name: true, email: true }
  })

  return user
}
