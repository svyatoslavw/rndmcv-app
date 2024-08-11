import {
  CustomizeApplyAccentColor,
  CustomizeChangeColorSubtype,
  CustomizeChangeColorType,
  CustomizeSelectAccentColor,
  CustomizeSelectMulticolor
} from "@/features"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizeWrapper } from "@/shared/ui/customize-wrapper"

const CustomizeColorsList = () => {
  const { type, mode } = useAppSelector((state) => state.customization.colors)

  return (
    <CustomizeWrapper heading="Colors">
      <CustomizeChangeColorType />
      <CustomizeChangeColorSubtype />
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
