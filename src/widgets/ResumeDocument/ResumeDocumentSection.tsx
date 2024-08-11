import React from "react"

import { cn } from "@/shared/lib/utils"

interface ResumeDocumentSectionProps<T> {
  items: T[]
  heading: keyof T
  headingClassName?: string
  className?: string
  render: (item: T) => React.ReactNode
}

const ResumeDocumentSection = <T extends { id: string }>({
  items,
  heading,
  headingClassName,
  className,
  render
}: ResumeDocumentSectionProps<T>) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <div key={item.id}>
          <h3 className={cn("text-base font-semibold", headingClassName)}>
            {item[heading] as string}
          </h3>
          {render(item)}
        </div>
      ))}
    </div>
  )
}

export { ResumeDocumentSection }
