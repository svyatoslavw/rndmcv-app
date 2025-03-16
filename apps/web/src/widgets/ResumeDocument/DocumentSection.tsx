import React from "react"

import { cn } from "@/shared/lib/utils"

interface DocumentSectionProps<T> {
  items: T[]
  heading: keyof T
  fontSize: number
  headingClassName?: React.HTMLAttributes<HTMLHeadingElement>["className"]
  containerClassName?: React.HTMLAttributes<HTMLDivElement>["className"]
  contentClassName?: React.HTMLAttributes<HTMLDivElement>["className"]
  className?: string
  render: (item: T) => React.ReactNode
}

const DocumentSection = <T extends { id: string }>({
  items,
  heading,
  headingClassName,
  containerClassName,
  contentClassName,
  className,
  fontSize,
  render
}: DocumentSectionProps<T>) => {
  const getItemClasses = () => cn("mb-2 last:mb-0", className)

  const getHeadingClasses = () =>
    cn(`text-[calc(5px+${fontSize}px)] mb-[2px] font-semibold`, headingClassName)

  const getContentClasses = () => cn(`text-[calc(3px+${fontSize}px)]`, contentClassName)

  const renderSectionItem = (item: T) => (
    <div key={item.id} className={getItemClasses()}>
      <h3 className={getHeadingClasses()}>{item[heading] as string}</h3>
      <div className={getContentClasses()}>{render(item)}</div>
    </div>
  )

  return <div className={containerClassName}>{items.map(renderSectionItem)}</div>
}

export { DocumentSection }
