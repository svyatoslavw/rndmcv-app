import { Session } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

import { auth } from "@auth"
import { ADMIN_URLS } from "./shared/config"

export default auth(async (req: NextRequest & { auth: Session | null }) => {
  const url = req.nextUrl.clone()

  if (!req.auth && url.pathname !== ADMIN_URLS.AUTH) {
    url.pathname = ADMIN_URLS.AUTH
    return NextResponse.redirect(url)
  }

  if (req.auth && url.pathname === ADMIN_URLS.AUTH) {
    url.pathname = ADMIN_URLS.DASHBOARD
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/", "/dashboard", "/users", "/resumes"]
}
