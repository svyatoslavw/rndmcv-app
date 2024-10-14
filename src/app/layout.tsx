import { GoogleAnalytics } from "@next/third-parties/google"
import type { Metadata } from "next"
import Script from "next/script"

import "./globals.css"
import { Providers } from "./providers"
import { APP_METADATA, APP_TITLE } from "@/shared/lib/config"

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <Script async src="https://cdn.tailwindcss.com" />
        <Script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
          integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  )
}
