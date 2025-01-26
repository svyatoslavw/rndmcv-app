"use client"

import { Button } from "@rndm/ui/components"

import {
  CustomizationSelector,
  selectCustomizationResume,
  useCustomizationActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import type { TypeHeadingStyle } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"

interface Test {
  type: TypeHeadingStyle
  className: string
}

const HEADING_STYLES: Test[] = [
  { type: "underline", className: "after:h-[2px] after:w-16" },
  { type: "shortUnderline", className: "gap-1 after:h-[6px] after:w-8" },
  { type: "line", className: "after:h-1 after:w-full" },
  { type: "box", className: "items-center justify-center after:hidden after:w-full" },
  {
    type: "topBottomLine",
    className:
      "items-center px-3 py-1 before:block before:h-[2px] before:w-full before:rounded before:bg-neutral-300 before:content-[''] after:h-[2px] after:w-full"
  },
  { type: "simple", className: "after:hidden" }
]

const ChangeHeadingStyle = () => {
  const { style } = useAppSelector(selectCustomizationResume("heading"))
  const { updateCustomization } = useCustomizationActions()

  const onChangeHeadingStyle = (style: TypeHeadingStyle) => {
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
              "flex h-16 w-32 flex-col items-start gap-2 rounded-lg border p-3 before:bg-transparent after:block after:rounded after:bg-neutral-300 after:content-[''] dark:border-secondary dark:before:bg-neutral-700 dark:after:bg-neutral-700",
              value.className,
              { "before:bg-primary after:bg-primary": isSelected }
            )}
            variant={isSelected ? "secondary" : "ghost"}
            onClick={onClick}
          >
            <span
              className={cn("h-3 w-16 rounded bg-neutral-300 dark:bg-neutral-700", {
                ["w-full"]: isCentered,
                "bg-primary": isSelected
              })}
            />
          </Button>
        )}
        selectedItem={HEADING_STYLES.find((option) => option.type === style)!}
        onChange={(option) => onChangeHeadingStyle(option.type)}
      />
    </CustomizeSectionWrapper>
  )
}

export { ChangeHeadingStyle }
