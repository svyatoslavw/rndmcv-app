"use client"

import { Button } from "@rndm/ui/components"
import { CheckCheckIcon } from "lucide-react"
import { useState } from "react"

import { CreateCustomTheme } from "./CreateCustomTheme"
import { ColorButton, selectCustomizationResume, useCustomizationActions } from "@/entities/resume"
import { DEFAULT_COLORS, DEFAULT_MULTICOLORS } from "@/shared/constants"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import type { TypeColorSides } from "@/shared/types"

const SelectMulticolor = ({ type }: { type: "basic" | "advanced" }) => {
  const { updateCustomization } = useCustomizationActions()
  const {
    side: { left, right }
  } = useAppSelector(selectCustomizationResume("colors"))

  const [isOpen, setIsOpen] = useState(false)

  const onChangeColor = (side: TypeColorSides) => {
    updateCustomization({ key: "colors", value: { side } })
  }

  const isColorChecked = (color: TypeColorSides) =>
    left.accent === color.left.accent &&
    right.accent === color.right.accent &&
    left.background === color.left.background &&
    right.background === color.right.background &&
    left.text === color.left.text &&
    right.text === color.right.text

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-4">
        {type === "basic" ? (
          <>
            {DEFAULT_COLORS.map((color) => (
              <ColorButton
                key={color.left.accent}
                isTextVisible={false}
                onChange={() => onChangeColor(color)}
              >
                <div className="flex h-10 w-20 rounded-lg dark:border-secondary">
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
                      "flex w-1/2 items-center justify-center rounded-r-lg text-white",
                      `bg-[${color.left.accent}]`
                    )}
                  >
                    {left.accent === color.left.accent && <CheckCheckIcon />}
                  </div>
                </div>
              </ColorButton>
            ))}
            <Button onClick={() => setIsOpen(!isOpen)}>Custom</Button>
          </>
        ) : (
          <>
            {DEFAULT_MULTICOLORS.map((color) => (
              <ColorButton
                key={color.left.accent}
                isTextVisible={false}
                onChange={() => onChangeColor(color)}
              >
                <div
                  className={cn("relative flex h-10 w-20 rounded-lg dark:border-secondary", {
                    "opacity-50": isColorChecked(color)
                  })}
                >
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
                      `bg-[${color.right.background}] text-[${color.right.text}]`
                    )}
                  >
                    <span>T</span>
                    <span className={cn("h-1 w-6", { [`bg-[${color.right.accent}]`]: true })} />
                  </div>
                  {isColorChecked(color) && (
                    <CheckCheckIcon className="absolute right-3 top-1/2 -translate-y-1/2" />
                  )}
                </div>
              </ColorButton>
            ))}
            <Button onClick={() => setIsOpen(!isOpen)}>Custom</Button>
          </>
        )}
      </div>
      {isOpen &&
        (type === "basic" ? (
          <CreateCustomTheme type="basic" />
        ) : (
          <CreateCustomTheme type="advanced" />
        ))}
    </div>
  )
}

export { SelectMulticolor }
