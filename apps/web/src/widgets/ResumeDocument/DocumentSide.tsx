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
  isHidden?: boolean
}

const CARD_MARGIN = 8

const DocumentSide = forwardRef<HTMLDivElement, DocumentSideProps>(
  ({ children, isCard, variant, colors, layout: lyt, spacing, isHidden = false }, ref) => {
    if (isHidden) return null

    const { layout, columnsWidth } = lyt
    const { side, mode } = colors
    const { marginX, marginY } = spacing
    const isLeft = variant === "left"

    const getBaseClasses = () =>
      cn("flex flex-col gap-3", {
        "gap-px px-1 py-3": isCard,
        "flex-row w-full gap-3": layout.pos === "top" && lyt.variant === "2-columns"
      })

    const getSideClasses = () => {
      const baseClasses = `w-[${columnsWidth[variant]}%] h-full`
      const topLayoutClasses = {
        [isLeft
          ? `h-fit w-full px-[${isCard ? CARD_MARGIN : marginX}px] pt-[${isCard ? CARD_MARGIN : marginY}px] pb-2`
          : `${layout.pos === "top" ? "h-fit" : "h-full"} w-full px-[${isCard ? CARD_MARGIN : marginX}px] pt-2 pb-[${isCard ? CARD_MARGIN : marginY}px]`]:
          layout.pos === "top"
      }

      return cn(baseClasses, topLayoutClasses)
    }

    const getTextColor = () => {
      if (isLeft || mode === "basic" || mode === "border") {
        return side.left.text
      }
      return side.right.text
    }

    const getBackgroundClass = () =>
      cn({
        [`bg-[${side[variant].background}]`]: mode === "advanced"
      })

    const getPaddingClasses = () =>
      cn(`px-[${marginX}px] py-[${marginY}px]`, {
        [`p-[${CARD_MARGIN}px]`]: isCard
      })

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
