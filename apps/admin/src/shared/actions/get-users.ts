"use server"

import { prisma } from "@rndm/database"

export default async function getUsers() {
  const users = await prisma.user.findMany()

  return users
}
