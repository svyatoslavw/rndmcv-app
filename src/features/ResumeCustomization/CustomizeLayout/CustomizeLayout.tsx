"use client"

import { useAppDispatch } from "@/app/store"
import { updateCustomization } from "@/entities/resume"
import type { TypePosition } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const LAYOUT_POSITIONS: TypePosition[] = [
  { pos: "left", class: "flex-row" },
  { pos: "top", class: "flex-col" },
  { pos: "right", class: "flex-row-reverse" }
]

const CustomizeLayout = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex gap-6">
      {LAYOUT_POSITIONS.map((layout) => (
        <div key={layout.pos} className="flex flex-col gap-2">
          <Button
            className={cn(
              "flex h-16 w-16 rounded-full border-4 border-primary p-1 shadow-none transition-all hover:opacity-70",
              layout.class
            )}
            variant={"outline"}
            onClick={() => dispatch(updateCustomization({ key: "layout", value: { layout } }))}
          >
            <div
              className={cn("h-full w-1/2 bg-primary", {
                "h-1/2 w-full rounded-t-full": layout.pos === "top",
                "rounded-l-full": layout.pos === "left",
                "rounded-r-full": layout.pos === "right"
              })}
            />
            <div
              className={cn("h-full w-1/2 bg-white", {
                "h-1/2 w-full rounded-b-full": layout.pos === "top",
                "rounded-r-full": layout.pos === "left",
                "rounded-l-full": layout.pos === "right"
              })}
            />
          </Button>
          <p className="text-center text-xs capitalize">{layout.pos}</p>
        </div>
      ))}
    </div>
  )
}

export { CustomizeLayout }
