import React from "react"

import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

type RenderProps<T> = {
  value: T
  isSelected: boolean
  onClick: () => void
  isCentered?: boolean
}

interface CustomizationProps<T> {
  items: T[]
  selectedItem: T
  onChange: (value: T) => void
  render?: (props: RenderProps<T>) => React.ReactNode
  itemClassName?: string
}

function CustomizationSelector<T>({
  items,
  selectedItem,
  onChange,
  render,
  itemClassName = ""
}: CustomizationProps<T>) {
  return (
    <>
      {items.map((item) => {
        const isSelected = item === selectedItem

        const defaultProps = {
          value: item,
          isSelected,
          isCentered: false,
          onClick: () => onChange(item)
        }

        return render ? (
          render(defaultProps)
        ) : (
          <Button
            key={typeof item === "object" ? JSON.stringify(item) : String(item)}
            className={cn("", itemClassName)}
            variant={isSelected ? "default" : "outline"}
            onClick={() => onChange(item)}
          >
            {typeof item === "object" ? JSON.stringify(item) : String(item)}
          </Button>
        )
      })}
    </>
  )
}

export { CustomizationSelector }
