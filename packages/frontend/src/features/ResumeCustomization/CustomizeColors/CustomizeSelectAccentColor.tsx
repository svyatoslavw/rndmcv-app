"use client"

import { CheckCheckIcon } from "lucide-react"
import { useState } from "react"
import { HexColorPicker } from "react-colorful"

import { CustomizeColorOption, TColorSides, updateCustomization } from "@/entities/resume"
import { DEFAULT_COLORS } from "@/shared/lib/constants"
import { useOutside } from "@/shared/lib/hooks"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"

const CustomizeSelectAccentColor = () => {
  const dispatch = useAppDispatch()
  const {
    type,
    side: { left, right }
  } = useAppSelector((state) => state.customization.colors)

  const { accent, background: backgroundLeft, text: textLeft } = left
  const { background: backgroundRight, text: textRight } = right

  const [color, setColor] = useState("#F2CCFF")

  const { ref, isShow, setIsShow } = useOutside(false)

  const onChangeCustomColor = (c: string) => {
    setColor(c)
    dispatch(
      updateCustomization({
        key: "colors",
        value: {
          side: {
            left: { accent: c, text: textLeft, background: backgroundLeft },
            right: { accent: c, text: textRight, background: backgroundRight }
          }
        }
      })
    )
  }

  const onChangeColor = (side: TColorSides) => {
    dispatch(updateCustomization({ key: "colors", value: { side } }))
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {DEFAULT_COLORS.map((color) => (
        <CustomizeColorOption
          key={color.left.accent}
          isTextVisible={false}
          onChange={() => onChangeColor(color)}
        >
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border-4 text-white",
              `bg-[${color.left.accent}]`
            )}
          >
            {accent === color.left.accent && <CheckCheckIcon />}
          </div>
        </CustomizeColorOption>
      ))}
      <div
        onClick={() => setIsShow(!isShow)}
        className={cn(
          "relative flex h-12 w-12 items-center justify-center rounded-full border-4 text-white",
          `bg-[${color}]`
        )}
      >
        {accent === color && DEFAULT_COLORS.some((c) => c.left.accent !== accent) && (
          <CheckCheckIcon />
        )}

        {isShow && (
          <div ref={ref} className="absolute transition-all">
            <HexColorPicker color={color} onChange={onChangeCustomColor} />
          </div>
        )}
      </div>
    </div>
  )
}

export { CustomizeSelectAccentColor }
