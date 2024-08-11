import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"

interface ResumeDocumentSideProps {
  variant: "left" | "right"
  children: React.ReactNode
}

const ResumeDocumentSide = ({ children, variant }: ResumeDocumentSideProps) => {
  const columnsWidth = useAppSelector((state) => state.customization.layout.columnsWidth)
  const layout = useAppSelector((state) => state.customization.layout.layout)
  const { side, mode } = useAppSelector((state) => state.customization.colors)
  const { marginX, marginY } = useAppSelector((state) => state.customization.spacing)

  const isLeft = variant === "left"
  return (
    <div
      className={cn("flex flex-col gap-3", {
        [`w-[${columnsWidth.left}%]`]: layout.pos !== "top",
        [isLeft ? "rounded-l-lg" : "rounded-r-lg"]: layout.pos === "left",
        [isLeft ? "rounded-r-lg" : "rounded-l-lg"]: layout.pos === "right",
        [isLeft ? "rounded-t-lg" : "rounded-b-lg"]: layout.pos === "top",
        [isLeft ? `bg-[${side.left.background}]` : `bg-[${side.right.background}]`]:
          mode === "advanced",
        [`text-[${side.right.text}] px-[${marginX}px] py-[${marginY}px]`]: true
      })}
    >
      {children}
    </div>
  )
}

export { ResumeDocumentSide }
