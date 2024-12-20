"use client"

import { ResumeDomain, selectCustomizationResume, useCustomizationActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const ChangeColorMode = () => {
  const { mode } = useAppSelector(selectCustomizationResume("colors"))
  const { updateCustomization } = useCustomizationActions()

  const onChangeColorType = (mode: ResumeDomain.ColorMode) => {
    updateCustomization({ key: "colors", value: { mode } })
  }

  return (
    <div className="flex gap-6 font-semibold">
      <div
        className={cn("flex flex-col gap-2 opacity-40 transition-all", {
          "opacity-100": mode === "basic"
        })}
      >
        <Button
          className="flex h-20 w-20 flex-col rounded-full border-4 border-primary p-1 transition-all"
          variant={"outline"}
          onClick={() => onChangeColorType("basic")}
        />
        <p className="text-center text-sm capitalize">basic</p>
      </div>
      <div
        className={cn("flex flex-col gap-2 opacity-40 transition-all", {
          "opacity-100": mode === "advanced"
        })}
      >
        <Button
          className="flex h-20 w-20 flex-col items-start rounded-full border-4 border-primary p-1 transition-all"
          variant={"outline"}
          onClick={() => onChangeColorType("advanced")}
        >
          <div className="h-full w-1/2 rounded-l-full bg-primary" />
        </Button>
        <p className="text-center text-sm capitalize">Advanced</p>
      </div>
      <div
        className={cn("flex flex-col gap-2 opacity-40 transition-all", {
          "opacity-100": mode === "border"
        })}
      >
        <Button
          className="flex h-20 w-20 flex-col justify-start rounded-full border-[12px] border-primary p-1 transition-all"
          variant={"outline"}
          onClick={() => onChangeColorType("border")}
        />
        <p className="text-center text-sm capitalize">Border</p>
      </div>
      {/* <HexColorPicker color={color} onChange={(newColor) => setColor(newColor)} /> */}
    </div>
  )
}

export { ChangeColorMode }
