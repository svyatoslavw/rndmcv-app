"use client"

import { Montserrat } from "next/font/google"

import { useAppSelector } from "../store"

import { useSetResumes } from "@/entities/resume"
import { selectSettingsTheme } from "@/entities/user"
import { cn } from "@/shared/lib/utils"
import { Footer, Header } from "@/widgets"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

interface SiteProviderProps {
  children: React.ReactNode
}

const SiteProvider = ({ children }: SiteProviderProps) => {
  useSetResumes()
  const theme = useAppSelector(selectSettingsTheme)

  return (
    <div
      className={cn(
        "min-h-screen w-full bg-zinc-100 bg-[url('/patterns/rain.svg')] dark:bg-background dark:bg-[url('/patterns/rain-dark.svg')]",
        montserrat.className,
        theme ?? "theme-red"
      )}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export { SiteProvider }
