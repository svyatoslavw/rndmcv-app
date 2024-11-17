import type { TypeColors, TypeLayout, TypeSpacing } from "@/shared/types"

import { forwardRef } from "react"

import { cn } from "@/shared/lib/utils"

interface ResumeDocumentSideProps {
  variant: "left" | "right"
  children: React.ReactNode
  isCard?: boolean
  layout: TypeLayout
  colors: TypeColors
  spacing: TypeSpacing
}

const ResumeDocumentSide = forwardRef<HTMLDivElement, ResumeDocumentSideProps>(
  ({ children, isCard, variant, colors, layout: lyt, spacing }, ref) => {
    const { layout, columnsWidth } = lyt
    const { side, mode } = colors
    const { marginX, marginY } = spacing

    const isBasic = mode === "basic"
    const isBorder = mode === "border"
    const isLeft = variant === "left"

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-3",
          `text-[${isLeft || isBasic || isBorder ? side.left.text : side.right.text}] px-[${marginX}px] py-[${marginY}px]`,
          {
            [isLeft ? `w-[${columnsWidth.left}%] h-full` : `w-[${columnsWidth.right}%] h-full`]:
              layout.pos !== "top",
            [isLeft
              ? `h-[${columnsWidth.left}%] w-full px-[${marginX}px] pt-[${marginY}px] pb-0`
              : `h-[${columnsWidth.right}%] w-full px-[${marginX}px] pt-4 pb-[${marginY}px]`]:
              layout.pos === "top",
            [isLeft ? `bg-[${side.left.background}]` : `bg-[${side.right.background}]`]:
              mode === "advanced",
            ["gap-[1px] px-1 py-3"]: isCard
          }
        )}
        id={variant}
      >
        {children}
      </div>
    )
  }
)

ResumeDocumentSide.displayName = "ResumeDocumentSide"

export { ResumeDocumentSide }
