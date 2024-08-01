"use client"

import { setColumnsWidth } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const CustumizeColumnsWidth = () => {
  const dispatch = useAppDispatch()

  const layout = useAppSelector((state) => state.customization.layout)
  const { left, right } = useAppSelector((state) => state.customization.columnsWidth)

  function onChangeWidth(side: "left" | "right") {
    dispatch(setColumnsWidth(side))
  }
  return (
    <div className="w-full">
      <h3 className="mb-2 font-semibold">Columns Width</h3>
      <div className="flex w-full gap-2">
        <div className={cn("flex flex-col", { [`w-[${left}%]`]: true })}>
          <span className="text-xs">Left {left}%</span>
          <Button
            className="w-full"
            disabled={layout.position === "top"}
            onClick={() => onChangeWidth("left")}
            variant={"outline"}
          >
            +
          </Button>
        </div>
        <div className={cn("flex flex-col", { [`w-[${right}%]`]: true })}>
          <span className="text-xs">Right {right}%</span>
          <Button
            className="w-full"
            disabled={layout.position === "top"}
            onClick={() => onChangeWidth("right")}
            variant={"outline"}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  )
}

export { CustumizeColumnsWidth }
