import React, { forwardRef } from "react"

import { cn } from "@/shared/lib/utils"
import type {
  BorderOptions,
  BorderSize,
  ColorMode,
  ColorSides,
  LayoutPosition,
  LayoutVariant
} from "@/shared/types"

interface DocumentPageProps extends React.HTMLAttributes<HTMLDivElement> {
  lineHeight: number
  layout: LayoutPosition
  variant: LayoutVariant
  sides: ColorSides
  mode: ColorMode
  borderSize: BorderSize
  borderVisibility: BorderOptions
  pageHeight: number
  pageNumber?: number
}

const DocumentPage = forwardRef<HTMLDivElement, DocumentPageProps>(
  (
    {
      className,
      children,
      variant,
      pageHeight,
      lineHeight,
      layout,
      sides,
      mode,
      borderSize,
      borderVisibility,
      pageNumber = 1
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          `flex h-[${pageHeight - 3}px] w-full flex-col`,
          `leading-[${lineHeight}] ${layout.class}`,
          `bg-[${sides.left.background}]`,
          {
            [`bg-[${sides.right.background}]`]: layout.pos === "top" || variant === "1-column",
            [`bg-[${sides.left.background}]`]: mode !== "advanced",
            [`border-[${sides.left.accent}]`]: mode === "border",
            [`border-t-[${borderSize}px]`]: borderVisibility.top && mode === "border",
            [`border-b-[${borderSize}px]`]: borderVisibility.bottom && mode === "border",
            [`border-l-[${borderSize}px]`]: borderVisibility.left && mode === "border",
            [`border-r-[${borderSize}px]`]: borderVisibility.right && mode === "border"
          },
          className
        )}
        id="page"
      >
        {children}
      </div>
    )
  }
)

DocumentPage.displayName = "DocumentPage"

export { DocumentPage }
