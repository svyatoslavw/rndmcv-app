import React, { forwardRef } from "react"

import { cn } from "@/shared/lib/utils"
import type {
  TypeBorderSize,
  TypeBorderVisibility,
  TypeColorMode,
  TypeColorSide,
  TypePosition
} from "@/shared/types"

interface DocumentPageProps extends React.HTMLAttributes<HTMLDivElement> {
  lineHeight: number
  layout: TypePosition
  left: TypeColorSide
  mode: TypeColorMode
  borderSize: TypeBorderSize
  borderVisibility: TypeBorderVisibility
}

const DocumentPage = forwardRef<HTMLDivElement, DocumentPageProps>(
  ({ className, children, lineHeight, layout, left, mode, borderSize, borderVisibility }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-[1122px] w-full",
          `leading-[${lineHeight}] ${layout.class}`,
          className,
          {
            [`bg-[${left.background}]`]: mode !== "advanced",
            [`border-[${left.accent}]`]: mode === "border",
            [`border-t-[${borderSize}px]`]: borderVisibility.top && mode === "border",
            [`border-b-[${borderSize}px]`]: borderVisibility.bottom && mode === "border",
            [`border-l-[${borderSize}px]`]: borderVisibility.left && mode === "border",
            [`border-r-[${borderSize}px]`]: borderVisibility.right && mode === "border"
          }
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
