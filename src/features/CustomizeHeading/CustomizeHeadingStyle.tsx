"use client"

import { THeadingStyle, setHeadingStyle } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

interface CustomizeHeadingStyleItemProps {
  type: THeadingStyle
  className?: string
  onClick: () => void
  isCentered?: boolean
  styles: THeadingStyle
}

const CustomizeHeadingStyleItem = ({
  className,
  onClick,
  styles,
  type,
  isCentered = false
}: CustomizeHeadingStyleItemProps) => {
  const isActive = type === styles
  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      onClick={onClick}
      className={cn(
        "flex h-16 w-32 flex-col items-start gap-2 rounded-lg border p-3 before:bg-transparent after:block after:rounded after:bg-neutral-300 after:content-['']",
        className,
        { "before:bg-primary after:bg-primary": isActive }
      )}
    >
      <span
        className={cn("h-3 w-16 rounded bg-neutral-300", {
          ["w-full"]: isCentered,
          "bg-primary": isActive
        })}
      />
    </Button>
  )
}

const CustomizeHeadingStyle = () => {
  const dispatch = useAppDispatch()
  const styles = useAppSelector((state) => state.customization.heading.style)

  const onChangeHeadingStyle = (value: THeadingStyle) => {
    dispatch(setHeadingStyle({ key: "style", value }))
  }

  return (
    <div>
      <h3 className="mb-2 font-semibold">Style</h3>
      <div className="flex flex-wrap gap-4">
        <CustomizeHeadingStyleItem
          type="underline"
          styles={styles}
          className="after:h-[2px] after:w-16"
          onClick={() => onChangeHeadingStyle("underline")}
        />
        <CustomizeHeadingStyleItem
          type="shortUnderline"
          styles={styles}
          className="gap-1 after:h-[6px] after:w-8"
          onClick={() => onChangeHeadingStyle("shortUnderline")}
        />
        <CustomizeHeadingStyleItem
          type="line"
          styles={styles}
          className="after:h-1 after:w-full"
          onClick={() => onChangeHeadingStyle("line")}
        />
        <CustomizeHeadingStyleItem
          isCentered
          type="box"
          styles={styles}
          className="items-center justify-center after:hidden after:w-full"
          onClick={() => onChangeHeadingStyle("box")}
        />
        <CustomizeHeadingStyleItem
          type="topBottomLine"
          styles={styles}
          className="items-center px-3 py-1 before:block before:h-[2px] before:w-full before:rounded before:bg-neutral-300 before:content-[''] after:h-[2px] after:w-full"
          onClick={() => onChangeHeadingStyle("topBottomLine")}
        />

        <CustomizeHeadingStyleItem
          type="simple"
          styles={styles}
          className="after:hidden"
          onClick={() => onChangeHeadingStyle("simple")}
        />
      </div>
    </div>
  )
}

export { CustomizeHeadingStyle }
