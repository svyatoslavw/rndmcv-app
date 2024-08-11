"use client"

import { PlusIcon } from "lucide-react"

import { updateCustomization } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const MIN_WIDTH = 35

const CustumizeColumnsWidth = () => {
  const dispatch = useAppDispatch()

  const layout = useAppSelector((state) => state.customization.layout.layout)
  const { left, right } = useAppSelector((state) => state.customization.layout.columnsWidth)

  function onChangeWidth(side: "left" | "right") {
    const leftWidth = side === "left" ? left + 1 : left - 1
    const rightWidth = side === "right" ? right + 1 : right - 1

    const value = { columnsWidth: { left: leftWidth, right: rightWidth } }
    dispatch(updateCustomization({ key: "layout", value }))
  }
  return (
    <div className="w-full">
      <h3 className="mb-2 font-semibold">Columns Width</h3>
      <div className="flex w-full gap-2">
        <div className={cn("flex flex-col", { [`w-[${left}%]`]: true })}>
          <span className="text-xs">Left {left}%</span>
          <Button
            className="w-full"
            disabled={layout.pos === "top" || right === MIN_WIDTH}
            onClick={() => onChangeWidth("left")}
            variant={"outline"}
          >
            <PlusIcon size={14} />
          </Button>
        </div>
        <div className={cn("flex flex-col", { [`w-[${right}%]`]: true })}>
          <span className="text-xs">Right {right}%</span>
          <Button
            className="w-full"
            disabled={layout.pos === "top" || left === MIN_WIDTH}
            onClick={() => onChangeWidth("right")}
            variant={"outline"}
          >
            <PlusIcon size={14} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export { CustumizeColumnsWidth }
