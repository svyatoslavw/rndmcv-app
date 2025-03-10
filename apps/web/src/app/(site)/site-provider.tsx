"use client"

import { Rubik } from "next/font/google"

import { useSetResumes } from "@/entities/resume"
import type { Locale } from "@/i18n/config"
import { cn } from "@/shared/lib/utils"
import { IUser } from "@/shared/types"
import { Footer, Header } from "@/widgets"

interface SiteProviderProps {
  children: React.ReactNode
  profile?: IUser
  currentLocale: Locale
}

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

const SiteProvider = ({ children, profile, currentLocale }: SiteProviderProps) => {
  useSetResumes()

  //bg-[url('/graph-paper.svg')] dark:bg-[url('/graph-paper-dark.svg')]
  return (
    <div className={cn("flex min-h-screen w-full flex-col", rubik.className)}>
      <Header profile={profile} currentLocale={currentLocale} />
      <div className="mx-auto max-w-6xl flex-1 px-4 lg:px-0">{children}</div>
      <Footer />
    </div>
  )
}

export { SiteProvider }
