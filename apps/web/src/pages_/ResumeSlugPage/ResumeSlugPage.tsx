"use client"

import { cn, getDimensions } from "@/shared/lib/utils"
import type { ResumeEntity } from "@/shared/types"
import { ResumeDocument } from "@/widgets"
import { Button } from "@rndm/ui/components"

const ResumeSlugPage = ({ resume }: { resume: ResumeEntity }) => {
  const dimensions = getDimensions()
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-2">
      <Button>Copy template</Button>
      <div
        className={cn(
          "without-scrollbar hidden overflow-x-hidden overflow-y-scroll scroll-smooth pb-4 sm:hidden md:hidden lg:block xl:block 2xl:block",
          [`w-[${dimensions.width}px]`]
        )}
      >
        <ResumeDocument customization={resume.customization} general={resume.general} />
      </div>
    </div>
  )
}

export { ResumeSlugPage }
