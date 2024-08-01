import {
  CustomizeChangeColorSubtype,
  CustomizeChangeColorType,
  CustomizeSelectMulticolor
} from "@/features"
import { CustomizeSelectAccentColor } from "@/features/CustomizeColors/CustomizeSelectAccentColor"
import { useAppSelector } from "@/shared/lib/store"

const CustomizeColorsList = () => {
  const { type, subtype: sub } = useAppSelector((state) => state.customization.colors)

  return (
    <div className="mt-5 flex flex-col gap-9 rounded-xl bg-white p-8">
      <CustomizeChangeColorType />
      <CustomizeChangeColorSubtype />
      {sub === "accent" && <CustomizeSelectAccentColor />}
      {type === "basic" && sub === "multicolor" && <CustomizeSelectMulticolor type="basic" />}
      {type === "advanced" && sub === "multicolor" && <CustomizeSelectMulticolor type="advanced" />}
    </div>
  )
}

export { CustomizeColorsList }
