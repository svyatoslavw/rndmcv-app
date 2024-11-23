import { forwardRef } from "react"

import { ColorType } from "../domain"

import { cn } from "@/shared/lib/utils"

interface ColorButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: ColorType
  currentType?: ColorType
  onChange: () => void
  isTextVisible?: boolean
  children: React.ReactNode
}
const ColorButton = forwardRef<HTMLButtonElement, ColorButtonProps>(
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

ColorButton.displayName = "ColorButton"

export { ColorButton }
