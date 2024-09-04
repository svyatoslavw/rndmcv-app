"use client"

import { CheckCheckIcon } from "lucide-react"
import { useMemo, useState } from "react"
import { HexColorPicker } from "react-colorful"

import { CustomizeColorOption, updateCustomization } from "@/entities/resume"
import { DEFAULT_COLORS } from "@/shared/lib/constants"
import { useOutside } from "@/shared/lib/hooks"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn, debounce } from "@/shared/lib/utils"

const CustomizeSelectAccentColor = () => {
  const dispatch = useAppDispatch()

  const [color, setColor] = useState("#F2CCFF")

  const { ref, isShow, setIsShow } = useOutside(false)
  const { side, mode, type } = useAppSelector((state) => state.customization.colors)
  const { accent, background } = side.left

  const isBasicMonotone = mode === "basic" && type === "accent"

  const getTextColor = (bgColor: string) =>
    parseInt(bgColor.slice(1), 16) < 0x808080 ? "#FFFFFF" : "#000000"

  const onChangeCustomColor = useMemo(
    () =>
      debounce((c: string) => {
        const textColor = getTextColor(c)
        setColor(c)
        dispatch(
          updateCustomization({
            key: "colors",
            value: {
              side: {
                left: { accent: textColor, text: textColor, background: c },
                right: {
                  accent: isBasicMonotone ? textColor : "#000",
                  text: isBasicMonotone ? textColor : "#000",
                  background: isBasicMonotone ? c : "#FFF"
                }
              }
            }
          })
        )
      }, 200),
    [dispatch]
  )

  const onChangeColor = (c: string) => {
    dispatch(
      updateCustomization({
        key: "colors",
        value: { side: { left: { accent: c }, right: { accent: c } } }
      })
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {DEFAULT_COLORS.map((clr) => (
        <CustomizeColorOption
          key={clr.left.accent}
          isTextVisible={false}
          onChange={() => onChangeColor(clr.left.accent!)}
        >
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border-4 text-white",
              `bg-[${clr.left.accent}]`
            )}
          >
            {accent === clr.left.accent && background !== color && <CheckCheckIcon />}
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
        {background === color && DEFAULT_COLORS.some((c) => c.left.background !== background) && (
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
