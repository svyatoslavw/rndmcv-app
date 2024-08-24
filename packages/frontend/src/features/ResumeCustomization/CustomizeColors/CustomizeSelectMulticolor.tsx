"use client"

import { CheckCheckIcon } from "lucide-react"

import { CustomizeColorOption, TColorSides, updateCustomization } from "@/entities/resume"
import { DEFAULT_COLORS, DEFAULT_MULTICOLORS } from "@/shared/lib"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"

const CustomizeSelectMulticolor = ({ type }: { type: "basic" | "advanced" }) => {
  const dispatch = useAppDispatch()
  const accent = useAppSelector((state) => state.customization.colors.side.left.accent)

  const onChangeColor = (side: TColorSides) => {
    dispatch(updateCustomization({ key: "colors", value: { side } }))
  }

  return (
    <div className="flex flex-wrap gap-4">
      {type === "basic"
        ? DEFAULT_COLORS.map((color) => (
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
                  className={cn("flex w-1/2 items-center justify-center rounded-r-lg text-white", {
                    [`bg-[${color.left.accent}]`]: true
                  })}
                >
                  {accent === color.left.accent && <CheckCheckIcon />}
                </div>
              </div>
            </CustomizeColorOption>
          ))
        : DEFAULT_MULTICOLORS.map((color) => (
            <CustomizeColorOption
              key={color.left.accent}
              isTextVisible={false}
              onChange={() => onChangeColor(color)}
            >
              <div className="relative flex h-10 w-20 rounded-lg border">
                <div
                  className={cn(
                    "flex w-1/2 flex-col items-center justify-center rounded-l-lg text-lg font-bold",
                    {
                      [`bg-[${color.left.background}]`]: true,
                      [`text-[${color.left.text}]`]: true
                    }
                  )}
                >
                  <span>T</span>
                  <span className={cn("h-1 w-6", { [`bg-[${color.left.accent}]`]: true })} />
                </div>
                <div
                  className={cn(
                    "flex w-1/2 flex-col items-center justify-center rounded-r-lg text-lg font-bold",
                    {
                      [`bg-[${color.right.background}]`]: true,
                      [`text-[${color.right.text}]`]: true,
                      ["opacity-15"]: accent === color.left.accent
                    }
                  )}
                >
                  <span>T</span>
                  <span className={cn("h-1 w-6", { [`bg-[${color.right.accent}]`]: true })} />
                </div>
                {accent === color.right.accent && accent === color.left.accent && (
                  <CheckCheckIcon className="absolute right-3 top-1/2 -translate-y-1/2" />
                )}
              </div>
            </CustomizeColorOption>
          ))}
    </div>
  )
}

export { CustomizeSelectMulticolor }
