import { cn } from "@/shared/lib/utils"
import { TypeHeadingIcon, TypeHeadingSize, TypeHeadingStyle } from "@/shared/types"

export const getHeadingClasses = (
  style: TypeHeadingStyle,
  accent: string,
  isAccent: boolean,
  isCard?: boolean
) =>
  cn("relative mb-2 font-semibold", {
    [`w-full border-b-[${isCard ? "1px" : "3px"}] border-neutral-500`]: style === "line",
    [`after:block after:h-[${isCard ? "1px" : "4px"}] after:w-12 after:rounded-md after:bg-neutral-500 after:content-['']`]:
      style === "shortUnderline",
    [`after:bg-[${accent}]`]: isAccent,
    [`w-fit border-b-[${isCard ? "1px" : "3px"}] border-neutral-500`]: style === "underline",
    [`border-[${accent}]`]: isAccent,
    ["w-full text-center"]: style === "box"
  })

export const getLineClasses = (
  size: TypeHeadingSize,
  fontSize: number,
  style: TypeHeadingStyle,
  isAccent: boolean,
  accent: string,
  isCard?: boolean
) =>
  cn("flex items-center", `text-[calc(${size}px+${fontSize}%)]`, {
    ["w-full justify-center"]: style === "box",
    ["w-full justify-center border-y-2"]: style === "topBottomLine",
    [`border-[${accent}]`]: isAccent,
    ["text-[7px]"]: isCard
  })

export const getIconClasses = (
  icons: TypeHeadingIcon,
  accent: string,
  textColor: string,
  isAccent: boolean,
  isCard?: boolean
) =>
  cn("mr-2", {
    [`fill-[${isAccent ? accent : textColor}]`]: icons === "filled",
    [`text-[${accent}]`]: isAccent,
    ["mr-[2px]"]: isCard
  })

export const getTextClasses = (
  size: number,
  fontSize: number,
  accent: string,
  isAccent: boolean,
  isCard?: boolean
) =>
  cn(`block text-[calc(${size}px+${fontSize}px)]`, {
    [`text-[${accent}]`]: isAccent,
    ["text-[7px]"]: isCard
  })
