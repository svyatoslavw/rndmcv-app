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
            ? `w-[${columnsWidth.left}%] h-full min-h-[960px]`
            : `w-[${columnsWidth.right}%] h-full min-h-[960px]`]: layout.pos !== "top",
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
