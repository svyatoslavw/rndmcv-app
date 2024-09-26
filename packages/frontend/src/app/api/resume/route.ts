import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma"
// путь к вашей Prisma инициализации
import { ICreateResume, IUpdateResume } from "@/shared/lib/types"

export async function POST(req: NextRequest) {
  try {
    const data: ICreateResume = await req.json()

    console.log("@data", data)

    const user = await prisma.user.findUnique({
      where: {
        id: data.userId
      },
      select: {
        id: true
      }
    })
    console.log("@user", user)

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const resume = await prisma.resume.create({
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

    console.log("@resume", resume)

    return NextResponse.json(resume, { status: 201 })
  } catch (error) {
    console.error("Error creating resume:", error)
    return NextResponse.json({ error: "Failed to create resume" }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data: IUpdateResume = await req.json() // Ожидаем id резюме и остальные данные

    console.log("@data", data)

    // Проверяем, существует ли резюме
    const resume = await prisma.resume.findUnique({
      where: {
        id: params.id
      },
      select: {
        id: true
      }
    })

    console.log("@resume", resume)

    if (!resume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 })
    }

    const updatedResume = await prisma.resume.update({
      where: { id: params.id, AND: { user: { id: data.userId } } },
      data: {
        general: data.general,
        customization: data.customization
      },
      select: {
        customization: true,
        general: true,
        id: true,
        user: true,
        userId: true
      }
    })

    console.log("@updatedResume", updatedResume)

    return NextResponse.json(updatedResume, { status: 200 })
  } catch (error) {
    console.error("Error updating resume:", error)
    return NextResponse.json({ error: "Failed to update resume" }, { status: 500 })
  }
}
