"use client"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { CustomizationSelector, selectResume, updateCustomization } from "@/entities/resume"
import { FONTS_MONO, FONTS_SANS, FONTS_SERIF } from "@/shared/constants"
import { cn } from "@/shared/lib/utils"
import { NextFont } from "@/shared/types"
import { Button } from "@/shared/ui"

const fonts = {
  sans: FONTS_SANS,
  serif: FONTS_SERIF,
  mono: FONTS_MONO
}

const SelectFontFamily = () => {
  const resume = useAppSelector(selectResume)
  const dispatch = useAppDispatch()

  const { font, style } = resume.customization.font

  const FONT_FAMILIES = Object.entries(fonts[style as keyof typeof fonts]).map(([key, value]) => ({
    key,
    value
  }))

  const onChangeFont = (font: NextFont) => {
    dispatch(updateCustomization({ key: "font", value: { font } }))
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      <CustomizationSelector
        items={FONT_FAMILIES}
        render={({ value, isSelected, onClick }) => (
          <Button
            key={value.value.className}
            className={cn("h-14 flex-col font-normal capitalize", value.value.className)}
            size={"lg"}
            variant={isSelected ? "default" : "outline"}
            onClick={onClick}
          >
            <span className={cn("text-xl font-medium", `font-${value.value}`)}>Aa</span>
            <span className="capitalize">{value.key}</span>
          </Button>
        )}
        selectedItem={FONT_FAMILIES.find((option) => option.value === font)!}
        onChange={(option) => onChangeFont(option.value)}
      />
    </div>
  )
}

export { SelectFontFamily }
