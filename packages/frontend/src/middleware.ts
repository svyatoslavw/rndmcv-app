import { auth } from "@/auth"

export default auth

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images (images folder)
     * - icons (icons folder)
     * - favicon.ico (favicon file)
     * - icon.png (icon file)
     * - apple-icon.png (Apple icon file)
     * - workbox* (service worker files)
     * - sw* (service worker files)
     * - sitemap.xml (sitemap file)
     * - robots.txt (robots file)
     * - manifest.webmanifest (web manifest file)
     */
    "/((?!api|_next/static|_next/image|images|icons|favicon.ico|icon.png|apple-icon.png|workbox.*|sw.*|sitemap.xml|robots.txt|manifest.webmanifest).*)"
  ]
}
