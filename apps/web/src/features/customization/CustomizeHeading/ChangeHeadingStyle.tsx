"use client"

import { Button } from "@rndm/ui/components"

import {
  CustomizationSelector,
  selectCustomizationResume,
  useResumeActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import type { HeadingStyle } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"

interface HeadingStyleOption {
  type: HeadingStyle
  className: string
}

const HEADING_STYLES: HeadingStyleOption[] = [
  { type: "underline", className: "after:h-[2px] after:w-16" },
  { type: "shortUnderline", className: "gap-1 after:h-[6px] after:w-8" },
  { type: "line", className: "after:h-1 after:w-full" },
  { type: "box", className: "items-center justify-center " },
  {
    type: "topBottomLine",
    className:
      "items-center px-3 py-1 before:block before:h-[2px] before:w-full before:rounded before:bg-neutral-300 before:content-[''] after:h-[2px] after:w-full"
  },
  { type: "simple", className: "after:hidden" },
  { type: "wavy", className: "underline underline-offset-2 decoration-wavy" }
]

const ChangeHeadingStyle = () => {
  const { style } = useAppSelector(selectCustomizationResume("heading"))
  const { updateCustomization } = useResumeActions()

  const handleStyleChange = (style: HeadingStyle) => {
    updateCustomization({ key: "heading", value: { style } })
  }

  return (
    <CustomizeSectionWrapper className="gap-4" heading="Style">
      <CustomizationSelector
        items={HEADING_STYLES}
        render={({ value, isCentered, isSelected, onClick }) => (
          <Button
            key={value.type}
            className={cn(
              "dark:border-secondary flex h-16 w-32 flex-col items-start gap-2 rounded border border-b-4 p-3 decoration-neutral-300 before:bg-transparent after:block after:rounded after:bg-neutral-300 after:content-[''] dark:decoration-neutral-700 dark:before:bg-neutral-700 dark:after:bg-neutral-700",
              value.className,
              { "before:bg-primary after:bg-primary": isSelected }
            )}
            variant={isSelected ? "secondary" : "ghost"}
            onClick={onClick}
          >
            <span
              className={cn(
                "h-3 w-16 rounded bg-neutral-300 text-xs text-transparent dark:bg-neutral-700",
                {
                  ["w-full"]: isCentered,
                  "bg-primary": isSelected
                }
              )}
            >
              some text
            </span>
          </Button>
        )}
        selectedItem={HEADING_STYLES.find((option) => option.type === style)!}
        onChange={(option) => handleStyleChange(option.type)}
      />
    </CustomizeSectionWrapper>
  )
}

export { ChangeHeadingStyle }
