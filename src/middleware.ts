import { Session } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

import { PUBLIC_URL } from "./shared/config"

import { auth } from "@/auth"

export default auth((req: NextRequest & { auth: Session | null }) => {
  const url = req.nextUrl.clone()

  if (!req.auth) {
    url.pathname = PUBLIC_URL.auth()

    return NextResponse.rewrite(url)
  }

  if (req.auth && url.pathname === PUBLIC_URL.auth()) {
    url.pathname = PUBLIC_URL.home()

    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/", "/settings", "/resume/:path*", "/auth"]
}
