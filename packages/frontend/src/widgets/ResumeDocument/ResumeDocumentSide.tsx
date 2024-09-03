import { forwardRef } from "react"

import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"

interface ResumeDocumentSideProps {
  variant: "left" | "right"
  children: React.ReactNode
}

const ResumeDocumentSide = forwardRef<HTMLDivElement, ResumeDocumentSideProps>(
  ({ children, variant }, ref) => {
    const columnsWidth = useAppSelector((state) => state.customization.layout.columnsWidth)
    const layout = useAppSelector((state) => state.customization.layout.layout)
    const { side, mode } = useAppSelector((state) => state.customization.colors)
    const { marginX, marginY } = useAppSelector((state) => state.customization.spacing)

    const isLeft = variant === "left"

    return (
      <div
        id={variant}
        ref={ref}
        className={cn("flex flex-col gap-3", {
          [isLeft
            ? `w-[${columnsWidth.left}%] h-[1122px]`
            : `w-[${columnsWidth.right}%] h-[1122px]`]: layout.pos !== "top",
          ["h-[calc(1122px/2)]"]: layout.pos === "top",
          [isLeft ? `bg-[${side.left.background}]` : `bg-[${side.right.background}]`]:
            mode === "advanced",
          [`text-[${isLeft ? side.left.text : side.right.text}] px-[${marginX}px] py-[${marginY}px]`]:
            true
        })}
      >
        {children}
      </div>
    )
  }
)

export { ResumeDocumentSide }
