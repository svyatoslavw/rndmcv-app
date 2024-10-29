import { NextRequest, NextResponse } from "next/server"

import { auth } from "@/auth"
import { prisma } from "@/prisma"
import { ICreateResume, IUpdateResume } from "@/shared/lib/types"

export async function POST(req: NextRequest) {
  try {
    const data: ICreateResume = await req.json()

    const session = await auth()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email
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
  } catch {
    return NextResponse.json({ error: "Failed to create resume" }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const data: IUpdateResume = await req.json()

    const session = await auth()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const resume = await prisma.resume.findUnique({
      where: {
        id: data.id,
        AND: { user: { email: session.user.email } }
      },
      select: {
        id: true
      }
    })

    if (!resume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 })
    }

    const updatedResume = await prisma.resume.update({
      where: { id: resume.id },
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
  } catch {
    return NextResponse.json({ error: "Failed to update resume" }, { status: 500 })
  }
}
