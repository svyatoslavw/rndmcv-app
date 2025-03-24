"use client"

import { selectResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn, getDimensions } from "@/shared/lib/utils"
import { useEffect, useState } from "react"
import { ResumeDocument } from "./ResumeDocument"

const ResumeDocumentWrapper = ({ className }: { className?: string }) => {
  const { customization, general } = useAppSelector(selectResume)

  const [dimensions, setDimensions] = useState(getDimensions)
  useEffect(() => {
    const handleResize = () => setDimensions(getDimensions())

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "without-scrollbar hidden overflow-x-hidden overflow-y-scroll scroll-smooth pb-24 pt-4 sm:hidden md:hidden lg:block xl:block 2xl:block",
        [`w-[${dimensions.width}px]`],
        className
      )}
    >
      <ResumeDocument
        width={dimensions.width}
        height={dimensions.height}
        customization={customization}
        general={general}
      />
    </div>
  )
}

export { ResumeDocumentWrapper }
