import { selectCustomizationResume } from "@/entities/resume"
import {
  AccentColorOptions,
  ChangeBorderSize,
  ChangeBorderVisibility,
  ChangeColorMode,
  ChangeColorType,
  SelectAccentColor,
  SelectMulticolor
} from "@/features"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeColorsList = () => {
  const { type, mode } = useAppSelector(selectCustomizationResume("colors"))

  const isBasicMulticolor = mode === "basic" && type === "multicolor"
  const isAdvancedMulticolor = mode === "advanced" && type === "multicolor"
  const isBorder = mode === "border"
  const isAccent = type === "accent"
  const isBorderMulticolor = isBorder && type === "multicolor"

  return (
    <CustomizeWrapper heading="Colors">
      <ChangeColorMode />
      <ChangeColorType />
      {isAccent && <SelectAccentColor />}
      {(isBasicMulticolor || isBorderMulticolor) && <SelectMulticolor type="basic" />}
      {isAdvancedMulticolor && <SelectMulticolor type="advanced" />}
      {isBorder && (
        <>
          <ChangeBorderVisibility />
          <ChangeBorderSize />
        </>
      )}

      <AccentColorOptions />
    </CustomizeWrapper>
  )
}

export { CustomizeColorsList }
