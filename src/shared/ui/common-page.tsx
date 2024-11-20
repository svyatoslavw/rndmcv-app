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
  ({ className, content, ...props }, ref) => (
    //eslint-disable-next-line jsx-a11y/heading-has-content
    <h2
      ref={ref}
      className={cn("text-xl font-bold tracking-tighter sm:text-3xl", className)}
      content={content || "Title"}
      {...props}
    />
  )
)

PageTitle.displayName = "PageTitle"

const PageDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))

PageDescription.displayName = "PageDescription"

const PageWrapper = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <main ref={ref} className={cn("flex h-full w-full flex-col gap-10", className)} {...props} />
  )
)

PageWrapper.displayName = "PageWrapper"

export { PageDescription, PageHeader, PageTitle, PageWrapper }

//className="flex h-full w-full flex-col gap-10"
