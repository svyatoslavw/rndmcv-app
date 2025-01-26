import * as React from "react"

import { cn } from "../lib/utils"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  heading: string
  isRecommended?: boolean
  isOptional?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, heading, isRecommended, isOptional, ...props }, ref) => {
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
        </h6>

        <textarea
          ref={ref}
          className={cn(
            "flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
      </label>
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }
