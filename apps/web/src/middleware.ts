import { Session } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

import { auth } from "@/auth"
import { PUBLIC_URLS } from "./shared/config"

export default auth(async (req: NextRequest & { auth: Session | null }) => {
  const url = req.nextUrl.clone()

  if (!req.auth) {
    url.pathname = PUBLIC_URLS.AUTH

    return NextResponse.rewrite(url)
  }

  if (req.auth && url.pathname === PUBLIC_URLS.AUTH) {
    url.pathname = PUBLIC_URLS.HOME

    return NextResponse.rewrite(url)
  }

  if (url.pathname === PUBLIC_URLS.HOME) {
    url.pathname = PUBLIC_URLS.RESUME

    return NextResponse.redirect(url)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/"]
}
