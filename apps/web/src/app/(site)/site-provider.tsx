"use client"

import { Mulish } from "next/font/google"

import { useSetResumes } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"
import { IUser } from "@/shared/types"
import { Sidebar } from "@/widgets/Sidebar/Sidebar"

interface SiteProviderProps {
  children: React.ReactNode
  profile?: IUser
}

const rubik = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

const SiteProvider = ({ children, profile }: SiteProviderProps) => {
  useSetResumes()

  //bg-[url('/graph-paper.svg')] dark:bg-[url('/graph-paper-dark.svg')]
  return (
    <main className={cn("flex min-h-screen w-full flex-col", rubik.className)}>
      <div className="flex w-full">
        <Sidebar user={profile}>{children}</Sidebar>
      </div>
      {/* <Footer /> */}
    </main>
  )
}

export { SiteProvider }
