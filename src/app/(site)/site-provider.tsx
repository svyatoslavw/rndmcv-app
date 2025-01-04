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
    <div className={cn("flex min-h-screen w-full flex-col bg-background", montserrat.className)}>
      <Header />
      <div className="mx-auto max-w-6xl flex-1 px-4 lg:px-0">{children}</div>
      <Footer />
    </div>
  )
}

export { SiteProvider }
