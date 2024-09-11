"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"

import { useTheme } from "@/shared/lib/hooks"
import { cn } from "@/shared/lib/utils"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { theme } = useTheme()
  return (
    <div
      className={cn("min-h-screen w-full bg-zinc-100", montserrat.className, theme ?? "theme-red")}
    >
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        {children}
        <div className="hidden bg-muted lg:block">
          <Image
            src="/placeholder.svg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  )
}