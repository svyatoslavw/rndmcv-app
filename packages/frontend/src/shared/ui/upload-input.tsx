"use client"

import * as React from "react"

import { useUploadFile } from "../lib/hooks/useUploadField"

import { cn } from "@/shared/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  heading?: string
  isRecommended?: boolean
  isOptional?: boolean
  onCustomChange: (value: string) => void
}

const UploadInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, onCustomChange, heading, isRecommended, isOptional, ...props }, ref) => {
    const { onUploadFile } = useUploadFile(onCustomChange)
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
          className={cn(
            "flex h-9 w-full rounded-[0.75rem] border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          onChange={onUploadFile}
          accept="image/*"
          type="file"
          ref={ref}
          {...props}
        />
      </label>
    )
  }
)
UploadInput.displayName = "UploadInput"

export { UploadInput }
