import { cn } from "@/shared/lib/utils"
import { HeadingIcon, HeadingSize, HeadingStyle } from "@/shared/types"

type CommonStyleProps = {
  accent: string
  isAccent: boolean
  isCard?: boolean
}

const SIZES = {
  CARD_TEXT: "7px",
  LINE_WIDTH: "12px",
  DOC: {
    CARD: "1px",
    DEFAULT: "3px"
  }
} as const

const getDocSize = (isCard?: boolean) => (isCard ? SIZES.DOC.CARD : SIZES.DOC.DEFAULT)

export const getHeadingClasses = (
  style: HeadingStyle,
  { accent, isAccent, isCard }: CommonStyleProps
) =>
  cn("relative mb-2 font-semibold", {
    [`w-full border-b-[${getDocSize(isCard)}] border-neutral-500`]: style === "line",
    [`after:block after:h-[${getDocSize(isCard)}] after:w-${SIZES.LINE_WIDTH} after:rounded-md after:bg-neutral-500 after:content-['']`]:
      style === "shortUnderline",
    [`after:bg-[${accent}]`]: isAccent,
    [`w-fit border-b-[${getDocSize(isCard)}] border-neutral-500`]: style === "underline",
    [`border-[${accent}]`]: isAccent,
    ["w-full text-center"]: style === "box"
  })

export const getLineClasses = (
  size: HeadingSize,
  fontSize: number,
  style: HeadingStyle,
  { accent, isAccent, isCard }: CommonStyleProps
) =>
  cn("flex items-center", `text-[calc(${size}px+${fontSize}%)]`, {
    ["w-full justify-center"]: style === "box",
    ["w-full justify-center border-y-2"]: style === "topBottomLine",
    [`border-[${accent}]`]: isAccent,
    [`text-[${SIZES.CARD_TEXT}]`]: isCard
  })

export const getIconClasses = (
  icons: HeadingIcon,
  textColor: string,
  { accent, isAccent, isCard }: CommonStyleProps
) =>
  cn("mr-2", {
    [`fill-[${isAccent ? accent : textColor}]`]: icons === "filled",
    [`text-[${accent}]`]: isAccent,
    ["mr-[2px]"]: isCard
  })

export const getTextClasses = (
  size: number,
  fontSize: number,
  { accent, isAccent, isCard }: CommonStyleProps
) =>
  cn(`block text-[calc(${size}px+${fontSize}px)]`, {
    [`text-[${accent}]`]: isAccent,
    [`text-[${SIZES.CARD_TEXT}]`]: isCard
  })
