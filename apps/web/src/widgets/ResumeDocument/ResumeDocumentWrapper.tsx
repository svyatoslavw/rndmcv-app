"use client"

import { selectResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { useEffect, useState } from "react"
import { ResumeDocument } from "./ResumeDocument"

const ResumeDocumentWrapper = ({ className }: { className?: string }) => {
  const { customization, general } = useAppSelector(selectResume)

  const getDimensions = () => {
    const width = window.innerWidth

    if (width <= 480) return { width: 600, height: 823 } // Мобильные
    if (width <= 768) return { width: 600, height: 823 } // Планшеты
    if (width <= 1024) return { width: 600, height: 823 } // Ноутбуки
    if (width <= 1280) return { width: 750, height: 1029 }
    if (width <= 1440) return { width: 750, height: 1029 }
    if (width <= 1660) return { width: 820, height: 1125 }
    return { width: 920, height: 1262 } // Десктоп
  }

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
