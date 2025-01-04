import React from "react"

import { cn } from "@/shared/lib/utils"

interface DocumentSectionProps<T> {
  items: T[]
  heading: keyof T
  fontSize: number
  headingClassName?: string
  className?: string
  render: (item: T) => React.ReactNode
}

const DocumentSection = <T extends { id: string }>({
  items,
  heading,
  headingClassName,
  className,
  fontSize,
  render
}: DocumentSectionProps<T>) => {
  return (
    <div className={cn(className)}>
      {items.map((item) => (
        <div key={item.id}>
          <h3
            className={cn(
              `text-[calc(5px+${fontSize}px)] mb-[2px] font-semibold`,
              headingClassName
            )}
          >
            {item[heading] as string}
          </h3>
          <div className={`text-[calc(3px+${fontSize}px)]`}>{render(item)}</div>
        </div>
      ))}
    </div>
  )
}

export { DocumentSection }
