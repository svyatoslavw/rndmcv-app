"use client"

import { Button } from "@rndm/ui/components"

import { ResumeDomain, selectCustomizationResume, useCustomizationActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"

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
          className="border-primary flex h-20 w-20 flex-col rounded-full border-4 p-1 transition-all"
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
          className="border-primary flex h-20 w-20 flex-col items-start rounded-full border-4 p-1 transition-all"
          variant={"outline"}
          onClick={() => onChangeColorType("advanced")}
        >
          <div className="bg-primary h-full w-1/2 rounded-l-full" />
        </Button>
        <p className="text-center text-sm capitalize">Advanced</p>
      </div>
      <div
        className={cn("flex flex-col gap-2 opacity-40 transition-all", {
          "opacity-100": mode === "border"
        })}
      >
        <Button
          className="border-primary flex h-20 w-20 flex-col justify-start rounded-full border-[12px] p-1 transition-all"
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
