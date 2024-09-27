import * as React from "react"

import { cn } from "@/shared/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  heading?: string
  isRecommended?: boolean
  isOptional?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, heading, isRecommended, isOptional, ...props }, ref) => {
    return (
      <label>
        <h6 className="ml-2 text-sm font-semibold capitalize">
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
        </h6>
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-[0.75rem] border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </label>
    )
  }
)
Input.displayName = "Input"

export { Input }
