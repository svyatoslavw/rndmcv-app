import { HexColorPicker } from "react-colorful"

import { cn } from "@/shared/lib/utils"
import { TypeColorSide, TypeColorSides } from "@/shared/types"
import { InfoMessage } from "@/shared/ui"

interface SelectCustomColorProps {
  updateModeVisible: () => void
  onChangeColor: (this: any, side: TypeColorSides) => void
  left: TypeColorSide
  right: TypeColorSide
  isModeVisible: boolean
  isLeft?: boolean
  isAdvanced?: boolean
  value: keyof TypeColorSide
}

const SelectCustomColor = ({
  updateModeVisible,
  onChangeColor,
  isModeVisible,
  isAdvanced = false,
  isLeft = false,
  value,
  left,
  right
}: SelectCustomColorProps) => {
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
    <div className="flex w-full flex-col items-center justify-center">
      <button
        className="flex flex-col items-center justify-center gap-2 text-sm capitalize"
        onClick={updateModeVisible}
      >
        <span>{value}</span>
        <div
          className={cn("h-8 w-8 rounded-full border-2 dark:border-secondary", `bg-[${color}]`)}
        />
      </button>
      {isModeVisible && (
        <div className="h-[200px] w-[200px] text-center transition-all">
          <HexColorPicker color={color} onChange={(c) => onChange(c)} />
          <InfoMessage size="xs" text="Click on the selected color to close the color palette." />
        </div>
      )}
    </div>
  )
}

export { SelectCustomColor }
