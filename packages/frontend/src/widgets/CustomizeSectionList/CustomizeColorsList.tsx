import { selectCustomizationResume } from "@/entities/resume"
import {
  CustomizeApplyAccentColor,
  CustomizeChangeColorMode,
  CustomizeChangeColorType,
  CustomizeSelectAccentColor,
  CustomizeSelectMulticolor
} from "@/features"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeColorsList = () => {
  const {
    colors: { type, mode }
  } = useAppSelector(selectCustomizationResume)

  const isBasicMulticolor = mode === "basic" && type === "multicolor"
  const isAdvancedMulticolor = mode === "advanced" && type === "multicolor"
  return (
    <CustomizeWrapper heading="Colors">
      <CustomizeChangeColorMode />
      <CustomizeChangeColorType />
      {type === "accent" && <CustomizeSelectAccentColor />}
      {isBasicMulticolor && <CustomizeSelectMulticolor type="basic" />}
      {isAdvancedMulticolor && <CustomizeSelectMulticolor type="advanced" />}
      <CustomizeApplyAccentColor />
    </CustomizeWrapper>
  )
}

export { CustomizeColorsList }
