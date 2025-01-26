"use client"

import { CheckCheckIcon } from "lucide-react"
import { useMemo, useState } from "react"
import { HexColorPicker } from "react-colorful"

import {
  ColorButton,
  selectCustomizationResume,
  useCustomizationActions
} from "@/entities/resume"
import { DEFAULT_COLORS } from "@/shared/constants"
import { useOutside } from "@/shared/hooks"
import { useAppSelector } from "@/shared/lib/store"
import { cn, debounce } from "@/shared/lib/utils"
import { InfoMessage } from "@rndm/ui/components"

const SelectAccentColor = () => {
  const { updateCustomization } = useCustomizationActions()
  const { ref, isShow, setIsShow } = useOutside(false)
  const { side, mode, type } = useAppSelector(selectCustomizationResume("colors"))

  const { accent, background } = side.left

  const [color, setColor] = useState(background || "#F2CCFF")

  const isBasicMonotone = mode === "basic" && type === "accent"

  const getTextColor = (bgColor: string) =>
    parseInt(bgColor.slice(1), 16) < 0x808080 ? "#FFFFFF" : "#000000"

  const onChangeMonotoneColor = useMemo(
    () =>
      debounce((c: string) => {
        const textColor = getTextColor(c)

        setColor(c)

        updateCustomization({
          key: "colors",
          value: {
            side: {
              left: { accent: textColor, text: textColor, background: c },
              right: side.right
            }
          }
        })
      }, 200),
    [isBasicMonotone]
  )

  const onChangeColor = (c: string) => {
    updateCustomization({
      key: "colors",
      value: {
        side: {
          left: { background: side.left.background, text: side.left.text, accent: c },
          right: { background: side.right.background, text: side.right.text, accent: c }
        }
      }
    })
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {DEFAULT_COLORS.map((clr) => (
          <ColorButton
            key={clr.left.accent}
            isTextVisible={false}
            onChange={() => onChangeColor(clr.left.accent!)}
          >
            <div
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border-4 text-white dark:border-secondary",
                `bg-[${clr.left.accent}]`
              )}
            >
              {accent === clr.left.accent && <CheckCheckIcon />}
            </div>
          </ColorButton>
        ))}
        <button
          className={cn(
            "relative flex h-12 w-24 items-center justify-center rounded-full border-4 font-semibold dark:border-secondary",
            `bg-[${background}]`,
            `text-[${parseInt(background.slice(1), 16) < 0x808080 ? "#FFFFFF" : "#000000"}]`
          )}
          onClick={() => setIsShow((prev) => !prev)}
        >
          BG
        </button>
      </div>
      {isShow && (
        <div ref={ref} className="h-[200px] w-[200px] text-center transition-all">
          <HexColorPicker color={color} onChange={onChangeMonotoneColor} />
          <InfoMessage size="xs" text="Click outside to close the color palette." />
        </div>
      )}
    </div>
  )
}

export { SelectAccentColor }

