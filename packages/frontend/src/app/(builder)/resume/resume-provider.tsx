"use client"

import { Manrope } from "next/font/google"
import React from "react"

import { useAppSelector } from "@/app/store"
import { AutosaveResume } from "@/features"
import { cn } from "@/shared/lib/utils"
import { ResumeDocumentWrapper, ResumeSidebar } from "@/widgets"
import { Toolbar } from "@/widgets/Toolbar/Toolbar"

const noto_sans = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
})

const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector((state) => state.settings.theme)

  return (
    <div
      className={cn(
        "max-w-screen mx-auto flex h-screen max-h-screen w-full bg-zinc-100",
        theme ?? "theme-red",
        noto_sans.className
      )}
    >
      <AutosaveResume />
      <div className="relative mx-auto flex h-full w-full justify-center gap-8 bg-zinc-100 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-8 2xl:px-10">
        <ResumeSidebar />
        <div className="flex w-full gap-8 sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px]">
          <div
            className={cn(
              "relative w-full overflow-hidden scroll-smooth pb-8 pt-8 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2",
              noto_sans.className
            )}
          >
            {children}
          </div>
          <Toolbar />
          <ResumeDocumentWrapper />
        </div>
      </div>
    </div>
  )
}

export { ResumeProvider }
