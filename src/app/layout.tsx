import type { Metadata } from "next"

import { GoogleAnalytics } from "@next/third-parties/google"
import Script from "next/script"

import "./globals.css"
import { Providers } from "./providers"

import { APP_METADATA, APP_TITLE } from "@/shared/config"

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
        <Script
          async
          crossOrigin="anonymous"
          integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
          referrerPolicy="no-referrer"
          src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
        />
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  )
}
