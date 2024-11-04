"use client"

import type { TypeHeadingStyle } from "@/shared/lib/types"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

interface CustomizeHeadingStyleItemProps {
  type: TypeHeadingStyle
  className?: string
  onClick: () => void
  isCentered?: boolean
  style: TypeHeadingStyle
}

const CustomizeHeadingStyleItem = ({
  className,
  onClick,
  style,
  type,
  isCentered = false
}: CustomizeHeadingStyleItemProps) => {
  const isActive = type === style

  return (
    <Button
      className={cn(
        "flex h-16 w-32 flex-col items-start gap-2 rounded-lg border p-3 before:bg-transparent after:block after:rounded after:bg-neutral-300 after:content-[''] dark:border-background dark:before:bg-neutral-700 dark:after:bg-neutral-700",
        className,
        { "before:bg-primary after:bg-primary": isActive }
      )}
      variant={isActive ? "secondary" : "ghost"}
      onClick={onClick}
    >
      <span
        className={cn("h-3 w-16 rounded bg-neutral-300 dark:bg-neutral-700", {
          ["w-full"]: isCentered,
          "bg-primary": isActive
        })}
      />
    </Button>
  )
}

const CustomizeHeadingStyle = () => {
  const dispatch = useAppDispatch()
  const { style } = useAppSelector(selectCustomizationResume("heading"))

  const onChangeHeadingStyle = (style: TypeHeadingStyle) => {
    dispatch(updateCustomization({ key: "heading", value: { style } }))
  }

  return (
    <CustomizeSectionWrapper className="gap-4" heading="Style">
      <CustomizeHeadingStyleItem
        className="after:h-[2px] after:w-16"
        style={style}
        type="underline"
        onClick={() => onChangeHeadingStyle("underline")}
      />
      <CustomizeHeadingStyleItem
        className="gap-1 after:h-[6px] after:w-8"
        style={style}
        type="shortUnderline"
        onClick={() => onChangeHeadingStyle("shortUnderline")}
      />
      <CustomizeHeadingStyleItem
        className="after:h-1 after:w-full"
        style={style}
        type="line"
        onClick={() => onChangeHeadingStyle("line")}
      />
      <CustomizeHeadingStyleItem
        isCentered
        className="items-center justify-center after:hidden after:w-full"
        style={style}
        type="box"
        onClick={() => onChangeHeadingStyle("box")}
      />
      <CustomizeHeadingStyleItem
        className="items-center px-3 py-1 before:block before:h-[2px] before:w-full before:rounded before:bg-neutral-300 before:content-[''] after:h-[2px] after:w-full"
        style={style}
        type="topBottomLine"
        onClick={() => onChangeHeadingStyle("topBottomLine")}
      />

      <CustomizeHeadingStyleItem
        className="after:hidden"
        style={style}
        type="simple"
        onClick={() => onChangeHeadingStyle("simple")}
      />
    </CustomizeSectionWrapper>
  )
}

export { CustomizeHeadingStyle }
