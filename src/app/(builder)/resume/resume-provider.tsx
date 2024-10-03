"use client"

import { redirect } from "next/navigation"
import React from "react"

import { useAppSelector } from "@/app/store"
import { AutosaveResume } from "@/features"
import { PUBLIC_URL } from "@/shared/lib/config"
import { cn } from "@/shared/lib/utils"
import { ResumeDocumentWrapper, ResumeSidebar } from "@/widgets"
import { Toolbar } from "@/widgets/Toolbar/Toolbar"

const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector((state) => state.settings.theme)
  const resumes = useAppSelector((state) => state.resume.resumes)

  if (!resumes.length) {
    redirect(PUBLIC_URL.home())
  }

  return (
    <div
      className={cn(
        "max-w-screen mx-auto flex h-screen max-h-screen w-full bg-zinc-100",
        theme ?? "theme-red"
      )}
    >
      <AutosaveResume />
      <div className="relative mx-auto flex h-full w-full justify-center gap-8 bg-zinc-100 px-4 dark:bg-background sm:px-6 md:px-6 lg:px-8 xl:px-8 2xl:px-10">
        <ResumeSidebar />
        <div className="flex w-full gap-8 sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px]">
          <div className="relative w-full overflow-hidden scroll-smooth pb-8 pt-8 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
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
