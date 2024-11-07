import { forwardRef } from "react"

import { cn } from "@/shared/lib/utils"
import { TypeColorType } from "@/shared/types"

interface ColorItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: TypeColorType
  currentType?: TypeColorType
  onChange: () => void
  isTextVisible?: boolean
  children: React.ReactNode
}
const ColorItem = forwardRef<HTMLButtonElement, ColorItemProps>(
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

ColorItem.displayName = "ColorItem"

export { ColorItem }
