import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import Script from "next/script"

import { APP_METADATA, APP_TITLE } from "@/shared/config"
import "./globals.css"
import { Providers } from "./providers"

import "@rndm/ui/globals.css"

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
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html suppressHydrationWarning lang={locale}>
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
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Script async src="https://cdn.tailwindcss.com" />
          <Providers>{children}</Providers>
          <Analytics debug={process.env.NODE_ENV === "development"} mode="production" />
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
