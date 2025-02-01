import { GoogleAnalytics } from "@next/third-parties/google"
import "@rndm/ui/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import Script from "next/script"

import { APP_METADATA, APP_TITLE } from "@/shared/config"
import "./globals.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: {
    default: APP_TITLE as string,
    template: `%s | ${APP_TITLE}`
  },
  ...APP_METADATA
}

export default async function RooTypeLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta content="yes" name="mobile-web-app-capable" />
        <link href="/favicon.ico" rel="icon" sizes="48x48" />
        <link href="/icon?<generated>" rel="icon" sizes="<generated>" type="image/<generated>" />
        <link
          href="/apple-icon?<generated>"
          rel="apple-touch-icon"
          sizes="<generated>"
          type="image/<generated>"
        />
      </head>
      <body>
        <Script async src="https://cdn.tailwindcss.com" />
        <Providers>{children}</Providers>
        <Analytics mode="production" />
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  )
}
