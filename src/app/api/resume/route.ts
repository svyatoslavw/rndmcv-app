import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma"
import { ICreateResume, IUpdateResume } from "@/shared/lib/types"

export async function POST(req: NextRequest) {
  try {
    const data: ICreateResume = await req.json()

    const user = await prisma.user.findUnique({
      where: {
        id: data.userId
      },
      select: {
        id: true
      }
    })

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

    return NextResponse.json(resume, { status: 201 })
  } catch (error) {
    console.error("Error creating resume:", error)
    return NextResponse.json({ error: "Failed to create resume" }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const data: IUpdateResume = await req.json()

    const resume = await prisma.resume.findUnique({
      where: {
        id: data.id
      },
      select: {
        id: true
      }
    })

    if (!resume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 })
    }

    const updatedResume = await prisma.resume.update({
      where: { id: resume.id, AND: { user: { id: data.userId } } },
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

    return NextResponse.json(updatedResume, { status: 200 })
  } catch (error) {
    console.error("Error updating resume:", error)
    return NextResponse.json({ error: "Failed to update resume" }, { status: 500 })
  }
}
