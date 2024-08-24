"use client"

import { CheckCheckIcon } from "lucide-react"

import { CustomizeColorOption, TColorSides, updateCustomization } from "@/entities/resume"
import { DEFAULT_COLORS } from "@/shared/lib"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"

const CustomizeSelectAccentColor = () => {
  const dispatch = useAppDispatch()
  const accent = useAppSelector((state) => state.customization.colors.side.left.accent)

  const onChangeColor = (side: TColorSides) => {
    dispatch(updateCustomization({ key: "colors", value: { side } }))
  }

  return (
    <div className="flex flex-wrap gap-2">
      {DEFAULT_COLORS.map((color) => (
        <CustomizeColorOption
          key={color.left.accent}
          isTextVisible={false}
          onChange={() => onChangeColor(color)}
        >
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border text-white",
              {
                [`bg-[${color.left.accent}]`]: true
              }
            )}
          >
            {accent === color.left.accent && <CheckCheckIcon />}
          </div>
        </CustomizeColorOption>
      ))}
    </div>
  )
}

export { CustomizeSelectAccentColor }
