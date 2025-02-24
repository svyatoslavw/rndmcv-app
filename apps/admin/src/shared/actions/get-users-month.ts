"use server"

import { prisma } from "@rndm/database"

export async function getPercentNewUsers() {
  const now = new Date()
  const pastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1)

  // Количество старых пользователей
  const oldUsers = await prisma.user.count({
    where: {
      createdAt: {
        gte: pastMonth,
        lt: currentMonth // Исключаем текущий месяц
      }
    }
  })

  // Количество новых пользователей за текущий месяц
  const newUsers = await prisma.user.count({
    where: {
      createdAt: {
        gte: currentMonth,
        lte: now
      }
    }
  })

  const totalUsers = oldUsers + newUsers

  // Избегаем деления на 0
  const percent = totalUsers === 0 ? 0 : (newUsers / totalUsers) * 100

  return {
    percent: percent.toFixed(1),
    newUsers,
    oldUsers,
    totalUsers
  }
}
