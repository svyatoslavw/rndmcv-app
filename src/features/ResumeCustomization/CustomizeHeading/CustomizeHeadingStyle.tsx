"use client"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import type { TypeHeadingStyle } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

interface CustomizeHeadingStyleItemProps {
  type: TypeHeadingStyle
  className?: string
  onClick: () => void
  isCentered?: boolean
  styles: TypeHeadingStyle
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
        "flex h-16 w-32 flex-col items-start gap-2 rounded-lg border p-3 before:bg-transparent after:block after:rounded after:bg-neutral-300 after:content-[''] dark:border-background dark:after:bg-neutral-700",
        className,
        { "before:bg-primary after:bg-primary": isActive }
      )}
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
  const {
    heading: { style: styles }
  } = useAppSelector(selectCustomizationResume)

  const onChangeHeadingStyle = (style: TypeHeadingStyle) => {
    dispatch(updateCustomization({ key: "heading", value: { style } }))
  }

  return (
    <CustomizeSectionWrapper heading="Style" className="gap-4">
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
    </CustomizeSectionWrapper>
  )
}

export { CustomizeHeadingStyle }
