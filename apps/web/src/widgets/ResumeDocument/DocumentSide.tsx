import { forwardRef } from "react"

import { cn } from "@/shared/lib/utils"
import type { TypeColors, TypeLayout, TypeSpacing } from "@/shared/types"

interface DocumentSideProps {
  variant: "left" | "right"
  children: React.ReactNode
  isCard?: boolean
  layout: TypeLayout
  colors: TypeColors
  spacing: TypeSpacing
}

const DocumentSide = forwardRef<HTMLDivElement, DocumentSideProps>(
  ({ children, isCard, variant, colors, layout: lyt, spacing }, ref) => {
    const { layout, columnsWidth } = lyt
    const { side, mode } = colors
    const { marginX, marginY } = spacing

    const isBasic = mode === "basic"
    const isBorder = mode === "border"
    const isLeft = variant === "left"

    const sideClass = isLeft
      ? `w-[${columnsWidth.left}%] h-full`
      : `w-[${columnsWidth.right}%] h-full`
    const marginClass = isLeft
      ? `h-full w-full px-[${marginX}px] pt-[${marginY}px] pb-0`
      : `h-full w-full px-[${marginX}px] pt-4 pb-[${marginY}px]`
    const bgClass = isLeft ? `bg-[${side.left.background}]` : `bg-[${side.right.background}]`

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-3",
          `text-[${isLeft || isBasic || isBorder ? side.left.text : side.right.text}] px-[${marginX}px] py-[${marginY}px]`,
          {
            [sideClass]: layout.pos !== "top",
            [marginClass]: layout.pos === "top",
            [bgClass]: mode === "advanced",
            ["gap-[1px] px-1 py-3"]: isCard,
            ["hidden"]: layout.pos === "top" && !isLeft
          }
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

