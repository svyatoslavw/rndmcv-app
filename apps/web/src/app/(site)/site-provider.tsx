"use client"

import { Rubik } from "next/font/google"

import { useSetResumes } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"
import { IUser } from "@/shared/types"
import { Footer, Header } from "@/widgets"

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

const SiteProvider = ({ children, profile }: { children: React.ReactNode; profile?: IUser }) => {
  useSetResumes()

  return (
    <div
      className={cn(
        "flex min-h-screen w-full flex-col bg-[url('/graph-paper.svg')] dark:bg-[url('/graph-paper-dark.svg')]",
        rubik.className
      )}
    >
      <Header profile={profile} />
      <div className="mx-auto max-w-6xl flex-1 px-4 lg:px-0">{children}</div>
      <Footer />
    </div>
  )
}

export { SiteProvider }
