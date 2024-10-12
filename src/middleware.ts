import { NextRequest, NextResponse } from "next/server"

import { PUBLIC_URL } from "./shared/lib/config"
import { TSession } from "./shared/lib/types"
import { auth } from "@/auth"

export default auth((req: NextRequest & { auth: TSession }) => {
  const url = req.nextUrl.clone()

  if (!req.auth) {
    url.pathname = PUBLIC_URL.auth()
    return NextResponse.rewrite(url)
  }

  if (req.auth && req.nextUrl.pathname === PUBLIC_URL.auth()) {
    url.pathname = PUBLIC_URL.home()
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/", "/settings", "/resume/:path*"]
}
