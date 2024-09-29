import { NextResponse } from "next/server"

import { auth } from "@/auth"
import { prisma } from "@/prisma"

export const dynamic = "force-dynamic"

export async function GET(req: any, res: any) {
  try {
    const user = await auth()

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const data = await prisma.user.findUnique({
      where: {
        email: user.user.email
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        role: true,
        subscription: {
          select: {
            id: true,
            updatedAt: true,
            createdAt: true,
            expiresAt: true,
            customerId: true,
            price: true,
            type: true,
            user: true,
            userId: true
          }
        },
        resumes: {
          select: {
            id: true,
            createdAt: true,
            updatedAt: true,
            customization: true,
            general: true,
            user: true
          }
        }
      }
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ message: "[USER_GET] Server error" }, { status: 500 })
  }
}
