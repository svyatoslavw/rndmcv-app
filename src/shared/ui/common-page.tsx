import * as React from "react"

import { cn } from "../lib/utils"

const PageHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("flex w-full flex-col items-center gap-1", className)}
      {...props}
    />
  )
)
PageHeader.displayName = "PageHeader"

const PageTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("text-xl font-bold tracking-tighter sm:text-3xl", className)}
      {...props}
    />
  )
)
PageTitle.displayName = "PageTitle"

const PageDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-base text-muted-foreground", className)} {...props} />
))
PageDescription.displayName = "PageDescription"

export { PageDescription, PageHeader, PageTitle }
