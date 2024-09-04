"use client"

import { CheckCheckIcon } from "lucide-react"
import { useState } from "react"

import { CustomizeCreateCustomTheme } from "./CustomizeCreateCustomTheme"
import { CustomizeColorOption, TColorSides, updateCustomization } from "@/entities/resume"
import { DEFAULT_COLORS, DEFAULT_MULTICOLORS } from "@/shared/lib/constants"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const CustomizeSelectMulticolor = ({ type }: { type: "basic" | "advanced" }) => {
  const dispatch = useAppDispatch()
  const leftAccent = useAppSelector((state) => state.customization.colors.side.left.accent)

  const [isOpen, setIsOpen] = useState(false)

  const onChangeColor = (side: TColorSides) => {
    dispatch(updateCustomization({ key: "colors", value: { side } }))
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-4">
        {type === "basic" ? (
          <>
            {DEFAULT_COLORS.map((color) => (
              <CustomizeColorOption
                key={color.left.accent}
                isTextVisible={false}
                onChange={() => onChangeColor(color)}
              >
                <div className="flex h-10 w-20 rounded-lg border">
                  <div className="flex w-1/2 flex-col items-center justify-center rounded-l-lg text-lg font-bold">
                    <span>T</span>
                    <span className={cn("h-1 w-6", { [`bg-[${color.left.accent}]`]: true })} />
                  </div>
                  <div
                    className={cn(
                      "flex w-1/2 items-center justify-center rounded-r-lg text-white",
                      `bg-[${color.left.accent}]`
                    )}
                  >
                    {leftAccent === color.left.accent && <CheckCheckIcon />}
                  </div>
                </div>
              </CustomizeColorOption>
            ))}
            <Button onClick={() => setIsOpen(!isOpen)}>Custom</Button>
          </>
        ) : (
          <>
            {DEFAULT_MULTICOLORS.map((color) => (
              <CustomizeColorOption
                key={color.left.accent}
                isTextVisible={false}
                onChange={() => onChangeColor(color)}
              >
                <div className="relative flex h-10 w-20 rounded-lg border">
                  <div
                    className={cn(
                      "flex w-1/2 flex-col items-center justify-center rounded-l-lg text-lg font-bold",
                      `bg-[${color.left.background}] text-[${color.left.text}]`
                    )}
                  >
                    <span>T</span>
                    <span className={cn("h-1 w-6", { [`bg-[${color.left.accent}]`]: true })} />
                  </div>
                  <div
                    className={cn(
                      "flex w-1/2 flex-col items-center justify-center rounded-r-lg text-lg font-bold",
                      `bg-[${color.right.background}] text-[${color.right.text}]`,
                      { ["opacity-15"]: leftAccent === color.left.accent }
                    )}
                  >
                    <span>T</span>
                    <span className={cn("h-1 w-6", { [`bg-[${color.right.accent}]`]: true })} />
                  </div>
                  {leftAccent === color.right.accent && leftAccent === color.left.accent && (
                    <CheckCheckIcon className="absolute right-3 top-1/2 -translate-y-1/2" />
                  )}
                </div>
              </CustomizeColorOption>
            ))}
            <Button onClick={() => setIsOpen(!isOpen)}>Custom</Button>
          </>
        )}
      </div>
      {isOpen &&
        (type === "basic" ? (
          <CustomizeCreateCustomTheme type="basic" />
        ) : (
          <CustomizeCreateCustomTheme type="advanced" />
        ))}
    </div>
  )
}

export { CustomizeSelectMulticolor }
