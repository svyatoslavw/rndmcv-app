"use client"

import { Button } from "@rndm/ui/components"

import { CustomizationSelector, useResumeActions } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"
import type { TypePosition } from "@/shared/types"

const LAYOUT_POSITIONS: TypePosition[] = [
  { pos: "left", class: "flex-row" },
  { pos: "top", class: "flex-col" },
  { pos: "right", class: "flex-row-reverse" }
]

const ChangeLayoutPosition = () => {
  const { updateCustomization } = useResumeActions()

  const onChangeLayout = (layout: TypePosition) =>
    updateCustomization({ key: "layout", value: { layout } })

  return (
    <div className="flex gap-6">
      <CustomizationSelector
        items={LAYOUT_POSITIONS}
        render={({ value, onClick }) => (
          <div key={value.pos} className="flex flex-col gap-2">
            <Button
              className={cn(
                "border-primary flex h-16 w-16 rounded-full border-4 p-1 shadow-none transition-all hover:opacity-70",
                value.class
              )}
              variant={"outline"}
              onClick={onClick}
            >
              <div
                className={cn("bg-primary h-full w-1/2", {
                  "h-1/2 w-full rounded-t-full": value.pos === "top",
                  "rounded-l-full": value.pos === "left",
                  "rounded-r-full": value.pos === "right"
                })}
              />
              <div
                className={cn("h-full w-1/2 bg-white", {
                  "h-1/2 w-full rounded-b-full": value.pos === "top",
                  "rounded-r-full": value.pos === "left",
                  "rounded-l-full": value.pos === "right"
                })}
              />
            </Button>
            <p className="text-center text-xs capitalize">{value.pos}</p>
          </div>
        )}
        selectedItem={LAYOUT_POSITIONS[0]}
        onChange={onChangeLayout}
      />
    </div>
  )
}

export { ChangeLayoutPosition }
