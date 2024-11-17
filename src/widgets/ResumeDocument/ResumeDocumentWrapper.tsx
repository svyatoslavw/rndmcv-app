"use client"

import { ResumeDocument } from "./ResumeDocument"

import { useAppSelector } from "@/app/store"
import { selectResume } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"

const ResumeDocumentWrapper = ({ className }: { className?: string }) => {
  const { customization, general } = useAppSelector(selectResume)

  return (
    <div
      className={cn(
        "without-scrollbar hidden w-[820px] overflow-x-hidden overflow-y-scroll scroll-smooth pb-36 pt-8 sm:hidden md:hidden lg:block xl:block 2xl:block",
        className
      )}
    >
      <ResumeDocument customization={customization} general={general} />
    </div>
  )
}

export { ResumeDocumentWrapper }
