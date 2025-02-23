import { APP_METADATA, APP_TITLE } from "@/shared/config"
import "@rndm/ui/globals.css"
import type { Metadata } from "next"
import { Rethink_Sans, Rubik } from "next/font/google"
import "./globals.css"

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

const rethink = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["system-ui", "sans-serif"],
  weight: ["400", "500", "600", "700", "800"]
})

export const metadata: Metadata = {
  title: {
    default: APP_TITLE as string,
    template: `%s | ${APP_TITLE}`
  },
  ...APP_METADATA
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${rethink.className} text-foreground/70 bg-gray-100 font-medium antialiased`}
      >
        <main className="flex w-full">{children}</main>
      </body>
    </html>
  )
}
