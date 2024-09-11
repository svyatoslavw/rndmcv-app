import { forwardRef } from "react"

import { TColors, TLayout, TSpacing } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"

interface ResumeDocumentSideProps {
  variant: "left" | "right"
  children: React.ReactNode
  isCard?: boolean
  layout: TLayout
  colors: TColors
  spacing: TSpacing
}

const ResumeDocumentSide = forwardRef<HTMLDivElement, ResumeDocumentSideProps>(
  ({ children, isCard, variant, colors, layout: lyt, spacing }, ref) => {
    const { layout, columnsWidth } = lyt
    const { side, mode } = colors
    const { marginX, marginY } = spacing

    const isLeft = variant === "left"

    return (
      <div
        id={variant}
        ref={ref}
        className={cn(
          "flex flex-col gap-3",
          `text-[${isLeft ? side.left.text : side.right.text}] px-[${marginX}px] py-[${marginY}px]`,
          {
            [isLeft ? `w-[${columnsWidth.left}%] h-full` : `w-[${columnsWidth.right}%] h-full`]:
              layout.pos !== "top",
            [isLeft ? `h-[${columnsWidth.left}%] w-full` : `h-[${columnsWidth.right}%] w-full`]:
              layout.pos === "top",
            [isLeft ? `bg-[${side.left.background}]` : `bg-[${side.right.background}]`]:
              mode === "advanced",
            ["gap-[1px] px-1 py-3"]: isCard
          }
        )}
      >
        {children}
      </div>
    )
  }
)

ResumeDocumentSide.displayName = "ResumeDocumentSide"

export { ResumeDocumentSide }
