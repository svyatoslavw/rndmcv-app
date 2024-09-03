"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import { useTheme } from "@/shared/lib/hooks"
import { cn } from "@/shared/lib/utils"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { theme } = useTheme()
  return (
    <div
      className={cn("min-h-screen w-full bg-zinc-100", montserrat.className, theme ?? "theme-red")}
    >
      <header className="flex w-full items-center justify-between p-5">
        <Link href="/">
          <Image
            draggable={false}
            src="/logo.webp"
            width={80}
            height={80}
            alt="logo"
            className="rounded-3xl"
          />
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/pricing">Premium</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/auth" className="rounded-[0.75rem] bg-black px-6 py-2 text-white">
            Auth
          </Link>
        </div>
      </header>
      {children}
    </div>
  )
}
