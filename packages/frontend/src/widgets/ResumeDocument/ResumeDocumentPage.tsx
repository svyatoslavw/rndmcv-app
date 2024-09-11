import React, { forwardRef } from "react"

import type {
  TBorderSize,
  TBorderVisibility,
  TColorMode,
  TColorSide,
  TPosition
} from "@/entities/resume"
import { cn } from "@/shared/lib/utils"

interface ResumeDocumentPageProps extends React.HTMLAttributes<HTMLDivElement> {
  lineHeight: number
  layout: TPosition
  left: TColorSide
  mode: TColorMode
  borderSize: TBorderSize
  borderVisibility: TBorderVisibility
}

const ResumeDocumentPage = forwardRef<HTMLDivElement, ResumeDocumentPageProps>(
  ({ className, children, lineHeight, layout, left, mode, borderSize, borderVisibility }, ref) => {
    return (
      <div
        ref={ref}
        id="page"
        className={cn(
          "flex h-[1122px] w-full",
          `bg-[${left.background}] leading-[${lineHeight}] ${layout.class}`,
          className,
          {
            [`border-[${left.accent}]`]: mode === "border",
            [`border-t-[${borderSize}px]`]: borderVisibility.top && mode === "border",
            [`border-b-[${borderSize}px]`]: borderVisibility.bottom && mode === "border",
            [`border-l-[${borderSize}px]`]: borderVisibility.left && mode === "border",
            [`border-r-[${borderSize}px]`]: borderVisibility.right && mode === "border"
          }
        )}
      >
        {children}
      </div>
    )
  }
)

ResumeDocumentPage.displayName = "ResumeDocumentPage"

export { ResumeDocumentPage }
