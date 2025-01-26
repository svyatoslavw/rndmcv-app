"use client"

import { PlusIcon } from "lucide-react"

import { selectCustomizationResume, useCustomizationActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { CustomizeSectionWrapper } from "@/shared/ui"
import { Button } from "@rndm/ui/components"

const MIN_WIDTH = 35

const ChangeColumnsWidth = () => {
  const { updateCustomization } = useCustomizationActions()

  const {
    layout,
    columnsWidth: { left, right }
  } = useAppSelector(selectCustomizationResume("layout"))

  function onChangeWidth(side: "left" | "right") {
    const leftWidth = side === "left" ? left + 1 : left - 1
    const rightWidth = side === "right" ? right + 1 : right - 1

    const value = { columnsWidth: { left: leftWidth, right: rightWidth } }

    updateCustomization({ key: "layout", value })
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

export { ChangeColumnsWidth }

