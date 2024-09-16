import { TypeColorType } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"

type ColorOptionProps = {
  type?: TypeColorType
  currentType?: TypeColorType
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
        "flex cursor-pointer flex-col gap-2 rounded-lg text-sm opacity-50 transition-all hover:opacity-100",
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
