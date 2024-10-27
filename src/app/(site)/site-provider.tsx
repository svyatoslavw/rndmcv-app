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

const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  useSetResumes()
  const theme = useAppSelector(selectSettingsTheme)
  //bg-[url('/patterns/rain.svg')]
  return (
    <div
      className={cn(
        "min-h-screen w-full bg-white dark:bg-black",
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
