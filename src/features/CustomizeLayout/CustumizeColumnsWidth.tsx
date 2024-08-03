import { PlusIcon } from "lucide-react"

import { setColumnsWidth } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const MIN_WIDTH = 35

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
            disabled={layout.position === "top" || right === MIN_WIDTH}
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
            disabled={layout.position === "top" || left === MIN_WIDTH}
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
