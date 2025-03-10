import { Session } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

import { auth } from "@/auth"
import { PUBLIC_URLS } from "./shared/config"

export default auth(async (req: NextRequest & { auth: Session | null }) => {
  const RESUME_PATH = "/resume"
  const url = req.nextUrl.clone()

  if (!req.auth && (url.pathname.includes(RESUME_PATH) || url.pathname === PUBLIC_URLS.SETTINGS)) {
    url.pathname = PUBLIC_URLS.AUTH

    return NextResponse.rewrite(url)
  }

  if (url.pathname.includes(RESUME_PATH)) {
    const email = req.auth?.user.email
    const resumesApiUrl = new URL("/api/resumes", req.url)
    resumesApiUrl.searchParams.set("email", email || "")

    const response = await fetch(resumesApiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })

    const resumes = await response.json()

    if (resumes.length === 0) {
      url.pathname = PUBLIC_URLS.BUILDER

      return NextResponse.redirect(url)
    }
  }

  if (req.auth && url.pathname === PUBLIC_URLS.AUTH) {
    url.pathname = PUBLIC_URLS.HOME

    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/", "/settings", "/resume/:path*", "/auth"]
}
