import { forwardRef } from "react"

import { TypeColorType } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"

interface ColorOptionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: TypeColorType
  currentType?: TypeColorType
  onChange: () => void
  isTextVisible?: boolean
  children: React.ReactNode
}
const CustomizeColorOption = forwardRef<HTMLButtonElement, ColorOptionProps>(
  ({ colorType, currentType, onChange, isTextVisible = true, children, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg text-sm opacity-50 transition-all hover:opacity-100 disabled:hover:opacity-50",
        { "opacity-100": currentType === colorType }
      )}
      onClick={onChange}
    >
      {children}
      {isTextVisible && <span className="text-center font-medium capitalize">{colorType}</span>}
    </button>
  )
)

CustomizeColorOption.displayName = "CustomizeColorOption"

export { CustomizeColorOption }
