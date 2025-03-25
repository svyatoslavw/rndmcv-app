import { Header } from "@/components"
import { APP_METADATA, APP_TITLE } from "@/shared/config"
import { Footer } from "@/shared/ui"
import "@rndm/ui/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const mulish = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
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
      <body className={`${mulish.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
