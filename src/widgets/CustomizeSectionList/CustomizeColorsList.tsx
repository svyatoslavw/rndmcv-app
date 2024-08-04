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
    <div className="mt-5 flex flex-col gap-4 rounded-xl bg-white p-8">
      <h2 className="text-2xl font-bold">Colors</h2>
      <div className="flex flex-col gap-8">
        <CustomizeChangeColorType />
        <CustomizeChangeColorSubtype />
        {type === "accent" && <CustomizeSelectAccentColor />}
        {mode === "basic" && type === "multicolor" && <CustomizeSelectMulticolor type="basic" />}
        {mode === "advanced" && type === "multicolor" && (
          <CustomizeSelectMulticolor type="advanced" />
        )}
        <CustomizeApplyAccentColor />
      </div>
    </div>
  )
}

export { CustomizeColorsList }
