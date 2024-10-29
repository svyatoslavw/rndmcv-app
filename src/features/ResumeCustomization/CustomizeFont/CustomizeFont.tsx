"use client"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectResume, updateCustomization } from "@/entities/resume"
import { FONTS_MONO, FONTS_SANS, FONTS_SERIF } from "@/shared/lib/constants"
import { NextFont } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const fonts = {
  sans: FONTS_SANS,
  serif: FONTS_SERIF,
  mono: FONTS_MONO
}

const CustomizeFont = () => {
  const resume = useAppSelector(selectResume)
  const dispatch = useAppDispatch()

  const { font, style } = resume.customization.font

  const onChangeFont = (font: NextFont) => {
    dispatch(updateCustomization({ key: "font", value: { font } }))
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {Object.entries(fonts[style as keyof typeof fonts]).map(([key, fnt]) => (
        <Button
          key={key}
          className={cn("font-normal capitalize", fnt.className)}
          variant={font.className === fnt.className ? "default" : "outline"}
          onClick={() => onChangeFont(fnt)}
        >
          {key}
        </Button>
      ))}
    </div>
  )
}

export { CustomizeFont }
