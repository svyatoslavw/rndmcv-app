"use client"

import { Button } from "@rndm/ui/components"

import {
  CustomizationSelector,
  selectCustomizationResume,
  useResumeActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import type { LayoutPosition } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"

const LAYOUT_POSITIONS: LayoutPosition[] = [
  { pos: "left", class: "flex-row" },
  { pos: "top", class: "flex-col" },
  { pos: "right", class: "flex-row-reverse" }
]

const ChangeLayoutPosition = () => {
  const { variant } = useAppSelector(selectCustomizationResume("layout"))
  const { updateCustomization } = useResumeActions()

  if (variant === "1-column") return null

  const onChangeLayout = (layout: LayoutPosition) =>
    updateCustomization({ key: "layout", value: { layout } })

  return (
    <CustomizeSectionWrapper heading="Position" className="flex gap-6">
      <CustomizationSelector
        items={LAYOUT_POSITIONS}
        render={({ value, onClick }) => (
          <div key={value.pos} className="flex flex-col gap-2">
            <Button
              className={cn(
                "border-primary flex h-16 w-16 overflow-hidden rounded-lg border-4 p-0 shadow-none transition-all hover:opacity-70",
                value.class
              )}
              variant={"outline"}
              onClick={onClick}
            >
              <div
                className={cn("bg-primary h-full w-1/2", {
                  "h-1/2 w-full": value.pos === "top"
                })}
              />
              <div
                className={cn("h-full w-1/2 bg-white", {
                  "h-1/2 w-full": value.pos === "top"
                })}
              />
            </Button>
            <p className="text-center text-xs capitalize">{value.pos}</p>
          </div>
        )}
        selectedItem={LAYOUT_POSITIONS[0]}
        onChange={onChangeLayout}
      />
    </CustomizeSectionWrapper>
  )
}

export { ChangeLayoutPosition }
