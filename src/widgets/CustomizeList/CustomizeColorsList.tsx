import { useAppSelector } from "@/app/store"
import { selectCustomizationResume } from "@/entities/resume"
import {
  CustomizeApplyAccentColor,
  CustomizeChangeBorderSize,
  CustomizeChangeBorderVisibility,
  CustomizeChangeColorMode,
  CustomizeChangeColorType,
  CustomizeSelectMulticolor,
  SelectAccentColor
} from "@/features"
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
      <CustomizeChangeColorMode />
      <CustomizeChangeColorType />
      {isAccent && <SelectAccentColor />}
      {(isBasicMulticolor || isBorderMulticolor) && <CustomizeSelectMulticolor type="basic" />}
      {isAdvancedMulticolor && <CustomizeSelectMulticolor type="advanced" />}
      {isBorder && (
        <>
          <CustomizeChangeBorderVisibility />
          <CustomizeChangeBorderSize />
        </>
      )}

      <CustomizeApplyAccentColor />
    </CustomizeWrapper>
  )
}

export { CustomizeColorsList }
