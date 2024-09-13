"use client"

import { Work_Sans } from "next/font/google"

import { ResumeDocument } from "./ResumeDocument"
import { selectResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const ResumeDocumentWrapper = ({ className }: { className?: string }) => {
  const { customization, general } = useAppSelector(selectResume)
  return (
    <div
      className={cn(
        "hidden w-[794px] overflow-x-hidden overflow-y-scroll scroll-smooth pb-44 pt-8 sm:hidden md:hidden lg:block xl:block 2xl:block",
        className,
        work_sans.className
      )}
    >
      <ResumeDocument customization={customization} general={general} />
    </div>
  )
}

export { ResumeDocumentWrapper }
