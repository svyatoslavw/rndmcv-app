import { HexColorPicker } from "react-colorful"

import { TypeColorSide, TypeColorSides } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"

interface CustomizeChangeColorItemProps {
  updateModeVisible: () => void
  onChangeColor: (this: any, side: TypeColorSides) => void
  left: TypeColorSide
  right: TypeColorSide
  isModeVisible: boolean
  isLeft?: boolean
  isAdvanced?: boolean
  value: keyof TypeColorSide
}

const CustomizeChangeColorItem = ({
  updateModeVisible,
  onChangeColor,
  isModeVisible,
  isAdvanced = false,
  isLeft = false,
  value,
  left,
  right
}: CustomizeChangeColorItemProps) => {
  const color = isLeft ? left[value] : right[value]

  const onChange = (c: string) => {
    if (isAdvanced) {
      onChangeColor(
        isLeft
          ? { left: { ...left, [value]: c }, right }
          : { left, right: { ...right, [value]: c } }
      )
    } else {
      onChangeColor(
        value === "accent"
          ? { left: { ...left, [value]: c }, right: { ...right, [value]: c } }
          : { left: { ...left, [value]: c }, right }
      )
    }
  }

  return (
    <button
      className="flex flex-col items-center justify-center gap-2 text-sm capitalize"
      onClick={updateModeVisible}
    >
      <span>{value}</span>
      <div className={cn("h-8 w-8 rounded-full border-2", `bg-[${color}]`)} />
      {isModeVisible && <HexColorPicker color={color} onChange={(c) => onChange(c)} />}
    </button>
  )
}

export { CustomizeChangeColorItem }
