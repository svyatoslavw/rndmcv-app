"use client"

import { Montserrat } from "next/font/google"

import { useAppSelector } from "../store"

import { selectSettingsTheme } from "@/entities/user"
import { cn } from "@/shared/lib/utils"
import { Footer, Header } from "@/widgets"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector(selectSettingsTheme)
  return (
    <div
      className={cn("min-h-screen w-full bg-zinc-100", montserrat.className, theme ?? "theme-red")}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export { SiteProvider }
