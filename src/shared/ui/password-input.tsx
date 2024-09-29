"use client"

import { EyeIcon, EyeOffIcon } from "lucide-react"
import { forwardRef, useState } from "react"

import { Button } from "./button"
import type { InputProps } from "./input"
import { Input } from "./input"
import { cn } from "@/shared/lib/utils"

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, heading, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("pr-10", className)}
          ref={ref}
          {...props}
          heading={heading}
        />
        <Button
          variant="ghost"
          size="sm"
          type="button"
          className={cn("absolute right-0 h-full px-3 py-2 hover:bg-transparent", {
            "top-0": !heading,
            "top-2.5": heading
          })}
          onClick={() => setShowPassword(!showPassword)}
          disabled={props.disabled}
        >
          {showPassword ? (
            <EyeOffIcon size={20} aria-hidden="true" />
          ) : (
            <EyeIcon size={20} aria-hidden="true" />
          )}
        </Button>
      </div>
    )
  }
)

PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
