import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "inline-flex relative items-center justify-center whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary border-violet-900 border-b-4 text-primary-foreground shadow hover:bg-primary/70",
        destructive:
          "bg-destructive border-b-4 border-red-700 text-destructive-foreground shadow-sm hover:bg-destructive/70",
        outline:
          "border border-input border-b-4 bg-background shadow-sm hover:bg-accent dark:hover:bg-accent/50 hover:text-accent-foreground",
        secondary:
          "bg-secondary border-b-4 text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success:
          "bg-green-500 border-b-4 border-green-700 text-white shadow-sm hover:bg-green-500/70"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded px-3 text-xs",
        xs: "h-7 rounded px-2 text-xs",
        lg: "h-11 rounded px-6 py-3",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
