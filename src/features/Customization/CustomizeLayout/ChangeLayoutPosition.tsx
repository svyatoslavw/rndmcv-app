"use client"

import type { TypePosition } from "@/shared/types"

import { useAppDispatch } from "@/app/store"
import { CustomizationSelector, updateCustomization } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const LAYOUT_POSITIONS: TypePosition[] = [
  { pos: "left", class: "flex-row" },
  { pos: "top", class: "flex-col" },
  { pos: "right", class: "flex-row-reverse" }
]

const ChangeLayoutPosition = () => {
  const dispatch = useAppDispatch()

  const onChangeLayout = (layout: TypePosition) =>
    dispatch(updateCustomization({ key: "layout", value: { layout } }))

  return (
    <div className="flex gap-6">
      <CustomizationSelector
        items={LAYOUT_POSITIONS}
        render={({ value, isSelected, onClick }) => (
          <div key={value.pos} className="flex flex-col gap-2">
            <Button
              className={cn(
                "flex h-16 w-16 rounded-full border-4 border-primary p-1 shadow-none transition-all hover:opacity-70",
                value.class
              )}
              variant={"outline"}
              onClick={onClick}
            >
              <div
                className={cn("h-full w-1/2 bg-primary", {
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
