import {
  CustomizeApplyAccentColor,
  CustomizeChangeColorSubtype,
  CustomizeChangeColorType,
  CustomizeSelectAccentColor,
  CustomizeSelectMulticolor
} from "@/features"
import { useAppSelector } from "@/shared/lib/store"

const CustomizeColorsList = () => {
  const { type, mode } = useAppSelector((state) => state.customization.colors)

  return (
    <div className="mt-5 flex flex-col gap-9 rounded-xl bg-white p-8">
      <CustomizeChangeColorType />
      <CustomizeChangeColorSubtype />
      {type === "accent" && <CustomizeSelectAccentColor />}
      {mode === "basic" && type === "multicolor" && <CustomizeSelectMulticolor type="basic" />}
      {mode === "advanced" && type === "multicolor" && (
        <CustomizeSelectMulticolor type="advanced" />
      )}
      <CustomizeApplyAccentColor />
    </div>
  )
}

export { CustomizeColorsList }
