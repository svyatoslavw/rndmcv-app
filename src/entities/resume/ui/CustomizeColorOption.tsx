import { TColorType } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"

type ColorOptionProps = {
  type?: TColorType
  currentType?: TColorType
  onChange: () => void
  isTextVisible?: boolean
  children: React.ReactNode
}
const CustomizeColorOption = ({
  type,
  currentType,
  isTextVisible = true,
  onChange,
  children
}: ColorOptionProps) => {
  return (
    <div
      onClick={onChange}
      className={cn(
        "flex cursor-pointer flex-col gap-2 rounded-sm text-sm opacity-50 transition-all hover:opacity-100",
        {
          "opacity-100": currentType === type
        }
      )}
    >
      {children}
      {isTextVisible && <span className="text-center capitalize">{type}</span>}
    </div>
  )
}

export { CustomizeColorOption }
