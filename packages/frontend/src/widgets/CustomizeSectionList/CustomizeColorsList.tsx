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
  const { type, mode } = useAppSelector((state) => state.customization.colors)

  const isBasicMulticolor = mode === "basic" && type === "multicolor"
  const isAdvancedMulticolor = mode === "advanced" && type === "multicolor"
  return (
    <CustomizeWrapper heading="Colors">
      <CustomizeChangeColorMode />
      <CustomizeChangeColorType />
      {type === "accent" && <CustomizeSelectAccentColor />}
      {mode === "basic" && type === "multicolor" && <CustomizeSelectMulticolor type="basic" />}
      {mode === "advanced" && type === "multicolor" && (
        <CustomizeSelectMulticolor type="advanced" />
      )}
      <CustomizeApplyAccentColor />
    </CustomizeWrapper>
  )
}

export { CustomizeColorsList }
