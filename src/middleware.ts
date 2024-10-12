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
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - favicon.ico (favicon file)
     * - icon.png (icon file)
     * - apple-icon.png (Apple icon file)
     * - workbox* (service worker files)
     * - sw* (service worker files)
     * - sitemap.xml (sitemap file)
     * - robots.txt (robots file)
     * - manifest.webmanifest (web manifest file)
     */
    "/((?!api|favicon.ico|icon.png|apple-icon.png|workbox.*|sw.*|sitemap.xml|robots.txt|manifest.webmanifest).*)"
  ]
}
