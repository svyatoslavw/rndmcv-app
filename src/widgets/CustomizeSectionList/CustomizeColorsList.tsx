import { useAppSelector } from "@/app/store"
import { selectCustomizationResume } from "@/entities/resume"
import {
  CustomizeApplyAccentColor,
  CustomizeChangeBorderSize,
  CustomizeChangeBorderVisibility,
  CustomizeChangeColorMode,
  CustomizeChangeColorType,
  CustomizeSelectAccentColor,
  CustomizeSelectMulticolor
} from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeColorsList = () => {
  const {
    colors: { type, mode }
  } = useAppSelector(selectCustomizationResume)

  const isBasicMulticolor = mode === "basic" && type === "multicolor"
  const isAdvancedMulticolor = mode === "advanced" && type === "multicolor"
  const isBorder = mode === "border"
  return (
    <CustomizeWrapper heading="Colors">
      <CustomizeChangeColorMode />
      <CustomizeChangeColorType />
      {type === "accent" && <CustomizeSelectAccentColor />}
      {(isBasicMulticolor || isBorder) && <CustomizeSelectMulticolor type="basic" />}
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
