"use client"

import { Montserrat } from "next/font/google"

import { useSetResumes } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"
import { Footer, Header } from "@/widgets"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  useSetResumes()

  return (
    <div className={cn("min-h-screen w-full bg-white dark:bg-card", montserrat.className)}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export { SiteProvider }
