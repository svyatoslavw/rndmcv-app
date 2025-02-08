import { forwardRef } from "react"

import { cn } from "@/shared/lib/utils"
import type { Colors, Layout, Spacing } from "@/shared/types"

interface DocumentSideProps {
  variant: "left" | "right"
  children: React.ReactNode
  isCard?: boolean
  layout: Layout
  colors: Colors
  spacing: Spacing
}

const CARD_MARGIN = 8

const DocumentSide = forwardRef<HTMLDivElement, DocumentSideProps>(
  ({ children, isCard, variant, colors, layout: lyt, spacing }, ref) => {
    const { layout, columnsWidth } = lyt
    const { side, mode } = colors
    const { marginX, marginY } = spacing
    const isLeft = variant === "left"

    const getBaseClasses = () =>
      cn("flex flex-col gap-3", {
        "gap-px px-1 py-3": isCard,
        hidden: layout.pos === "top" && !isLeft
      })

    const getSideClasses = () => {
      if (layout.pos === "top") {
        return cn(
          "h-full w-full",
          `px-[${marginX}px]`,
          isLeft ? `pt-[${marginY}px] pb-0` : `pt-4 pb-[${marginY}px]`
        )
      }
      return `w-[${columnsWidth[variant]}%] h-full`
    }

    const getTextColor = () => {
      if (isLeft || mode === "basic" || mode === "border") {
        return side.left.text
      }
      return side.right.text
    }

    const getBackgroundClass = () => {
      if (mode === "advanced") {
        return `bg-[${side[variant].background}]`
      }
      return ""
    }

    const getPaddingClasses = () => {
      if (isCard) {
        return `px-[${CARD_MARGIN}px] py-[${CARD_MARGIN}px]`
      }
      return `px-[${marginX}px] py-[${marginY}px]`
    }

    return (
      <div
        ref={ref}
        className={cn(
          getBaseClasses(),
          `text-[${getTextColor()}]`,
          getPaddingClasses(),
          getSideClasses(),
          getBackgroundClass()
        )}
        id={variant}
      >
        {children}
      </div>
    )
  }
)

DocumentSide.displayName = "DocumentSide"

export { DocumentSide }
