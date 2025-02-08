import { prisma } from "@rndm/database"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email")

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 })
  }

  try {
    const resumes = await prisma.resume.findMany({
      where: { user: { email } },
      select: {
        id: true,
        general: true,
        customization: true
      }
    })

    return NextResponse.json(resumes, {
      headers: { "Content-Type": "application/json" }
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: "Failed to fetch resumes" })
  }
}
