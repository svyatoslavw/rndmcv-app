"use client"

import { PlusIcon } from "lucide-react"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const MIN_WIDTH = 35

const CustumizeColumnsWidth = () => {
  const dispatch = useAppDispatch()

  const {
    layout,
    columnsWidth: { left, right }
  } = useAppSelector(selectCustomizationResume("layout"))

  function onChangeWidth(side: "left" | "right") {
    const leftWidth = side === "left" ? left + 1 : left - 1
    const rightWidth = side === "right" ? right + 1 : right - 1

    const value = { columnsWidth: { left: leftWidth, right: rightWidth } }

    dispatch(updateCustomization({ key: "layout", value }))
  }

  return (
    <CustomizeSectionWrapper className="flex-nowrap" heading="Columns Width">
      <div className={cn("flex flex-col", `w-[${left}%]`)}>
        <span className="text-xs">Left {left}%</span>
        <Button
          className="w-full"
          disabled={layout.pos === "top" || right === MIN_WIDTH}
          variant={"outline"}
          onClick={() => onChangeWidth("left")}
        >
          <PlusIcon size={14} />
        </Button>
      </div>
      <div className={cn("flex flex-col", `w-[${right}%]`)}>
        <span className="text-xs">Right {right}%</span>
        <Button
          className="w-full"
          disabled={layout.pos === "top" || left === MIN_WIDTH}
          variant={"outline"}
          onClick={() => onChangeWidth("right")}
        >
          <PlusIcon size={14} />
        </Button>
      </div>
    </CustomizeSectionWrapper>
  )
}

export { CustumizeColumnsWidth }
