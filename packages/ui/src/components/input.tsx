import * as React from "react"

import { cn } from "../lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  heading?: string
  isRecommended?: boolean
  isOptional?: boolean
  isRequired?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, heading, isRecommended, isRequired, isOptional, ...props }, ref) => {
    return (
      <label>
        <h6 className="mb-0.5 ml-2 text-sm font-semibold capitalize">
          {heading}
          {isRecommended && (
            <span className="ml-1.5 text-xs font-semibold lowercase text-neutral-400/80">
              recomended
            </span>
          )}
          {isOptional && (
            <span className="ml-1.5 text-xs font-semibold lowercase text-neutral-400/80">
              optional
            </span>
          )}
          {isRequired && (
            <span className="ml-1.5 text-xs font-semibold lowercase text-neutral-400/80">
              required
            </span>
          )}
        </h6>
        <input
          ref={ref}
          className={cn(
            "border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-[0.75rem] border px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          type={type}
          {...props}
        />
      </label>
    )
  }
)

Input.displayName = "Input"

export { Input }
