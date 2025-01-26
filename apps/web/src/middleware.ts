import { Session } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

import { PUBLIC_URLS } from "./shared/config"

import { auth } from "@/auth"

export default auth((req: NextRequest & { auth: Session | null }) => {
  const url = req.nextUrl.clone()

  if (!req.auth) {
    url.pathname = PUBLIC_URLS.AUTH

    return NextResponse.rewrite(url)
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
