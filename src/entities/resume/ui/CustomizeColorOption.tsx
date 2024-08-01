import { cn } from "@/shared/lib/utils"
import { TColorSubtype } from "../model/customization.types"

type ColorOptionProps = {
  subtype?: TColorSubtype
  currentSubtype?: TColorSubtype
  onChange: () => void
  isTextVisible?: boolean
  children: React.ReactNode
}
const CustomizeColorOption = ({
  subtype,
  currentSubtype,
  isTextVisible = true,
  onChange,
  children
}: ColorOptionProps) => {
  return (
    <div
      onClick={onChange}
      className={cn(
        "flex cursor-pointer flex-col gap-2 text-sm opacity-50 transition-all hover:opacity-100",
        {
          "opacity-100": currentSubtype === subtype
        }
      )}
    >
      {children}
      {isTextVisible && <span className="text-center capitalize">{subtype}</span>}
    </div>
  )
}

export { CustomizeColorOption }
