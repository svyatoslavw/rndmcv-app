"use server"

import { prisma, Prisma, User } from "@rndm/database"

type GetUsersParams = {
  page?: number
  sort?: keyof User
  direction?: "asc" | "desc"
  search?: string
}

export default async function getUsers(params?: GetUsersParams) {
  const page = params?.page || 1
  const pageSize = 10
  const skip = (page - 1) * pageSize

  const where: Prisma.UserWhereInput = params?.search
    ? {
        OR: [
          { name: { contains: params.search, mode: "insensitive" } },
          { email: { contains: params.search, mode: "insensitive" } }
        ]
      }
    : {}

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      orderBy: params?.sort ? { [params.sort]: params.direction } : undefined,
      skip,
      take: pageSize,
      include: { resumes: true }
    }),
    prisma.user.count({ where })
  ])

  return {
    users,
    pagination: {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    }
  }
}
