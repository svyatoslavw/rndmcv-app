"use client"

import { selectCustomizationResume, useResumeActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import type { LayoutVariant } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"
import { Button } from "@rndm/ui/components"

const COLUMNS_VARIANTS: { content: React.JSX.Element; variant: LayoutVariant }[] = [
  {
    content: (
      <>
        <div className="group-[.active-button]:bg-primary h-1.5 w-full rounded-sm bg-neutral-300 dark:bg-neutral-700" />
        <div className="group-[.active-button]:bg-primary h-1.5 w-full rounded-sm bg-neutral-300 dark:bg-neutral-700" />
        <div className="group-[.active-button]:bg-primary h-1.5 w-full rounded-sm bg-neutral-300 dark:bg-neutral-700" />
      </>
    ),
    variant: "1-column"
  },
  {
    content: (
      <>
        <div className="flex w-full flex-col gap-1">
          <div className="group-[.active-button]:bg-primary h-1.5 w-full rounded-sm bg-neutral-300 dark:bg-neutral-700" />
          <div className="group-[.active-button]:bg-primary h-1.5 w-full rounded-sm bg-neutral-300 dark:bg-neutral-700" />
          <div className="group-[.active-button]:bg-primary h-1.5 w-full rounded-sm bg-neutral-300 dark:bg-neutral-700" />
        </div>
        <div className="flex w-full flex-col gap-1">
          <div className="group-[.active-button]:bg-primary h-1.5 w-full rounded-sm bg-neutral-300 dark:bg-neutral-700" />
          <div className="group-[.active-button]:bg-primary h-1.5 w-full rounded-sm bg-neutral-300 dark:bg-neutral-700" />
          <div className="group-[.active-button]:bg-primary h-1.5 w-full rounded-sm bg-neutral-300 dark:bg-neutral-700" />
        </div>
      </>
    ),
    variant: "2-columns"
  }
]

const ChangeColumnVariant = () => {
  const { updateCustomization } = useResumeActions()

  const { variant } = useAppSelector(selectCustomizationResume("layout"))
  const handleChangeColumnVariant = (vrnt: LayoutVariant) => {
    const value =
      vrnt === "2-columns"
        ? ({ variant: "2-columns" } as const)
        : ({ variant: "1-column", layout: { pos: "top", class: "flex-col" } } as const)
    updateCustomization({ key: "layout", value })
  }

  return (
    <CustomizeSectionWrapper heading="Columns">
      {COLUMNS_VARIANTS.map(({ content, variant: vrt }) => (
        <Button
          key={vrt}
          data-selected={vrt === variant}
          variant={vrt === variant ? "secondary" : "outline"}
          className={cn("group flex h-16 w-20 flex-col gap-1 rounded-lg", {
            "flex-row": vrt === "2-columns",
            "active-button": vrt === variant
          })}
          onClick={() => handleChangeColumnVariant(vrt)}
        >
          {content}
        </Button>
      ))}
    </CustomizeSectionWrapper>
  )
}

export { ChangeColumnVariant }
