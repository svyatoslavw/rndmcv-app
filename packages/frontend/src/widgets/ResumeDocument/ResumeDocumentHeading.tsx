import { LucideIcon } from "lucide-react"

import { TApplyAccent, THeadingIcon, THeadingSize, THeadingStyle } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"

interface ResumeDocumentHeadingProps {
  fontSize: number
  isAccent: TApplyAccent
  style: THeadingStyle
  size: THeadingSize
  icons: THeadingIcon
  Icon: LucideIcon
  textColor: string
  accent: string
  children?: React.ReactNode
  isCard?: boolean
}

const ResumeDocumentHeading = ({
  accent,
  isAccent,
  fontSize,
  children,
  isCard,
  size,
  textColor,
  icons,
  Icon,
  style
}: ResumeDocumentHeadingProps) => {
  return (
    <div
      className={cn("relative mb-2 font-semibold", {
        [`w-full border-b-[${isCard ? "1px" : "3px"}] border-neutral-500`]: style === "line",
        [`after:block after:h-[${isCard ? "1px" : "4px"}] after:w-12 after:rounded-md after:bg-neutral-500 after:content-['']`]:
          style === "shortUnderline",
        [`after:bg-[${accent}]`]: isAccent.headingsLines,
        [`text-[${accent}]`]: isAccent.headings,
        [`w-fit border-b-[${isCard ? "1px" : "3px"}] border-neutral-500`]: style === "underline",
        [`border-[${accent}]`]: isAccent.headingsLines,
        ["w-full bg-neutral-100 text-center"]: style === "box"
      })}
    >
      <div
        className={cn("flex items-center", `text-[calc(${size}px+${fontSize}%)]`, {
          "w-full justify-center bg-neutral-100 text-black": style === "box",
          "w-full justify-center border-y-2": style === "topBottomLine",
          [`border-[${accent}]`]: isAccent.headingsLines,
          [`text-[${accent}]`]: isAccent.headings,
          "text-[7px]": isCard
        })}
      >
        {icons !== "none" && (
          <Icon
            size={isCard ? 8 : size}
            strokeWidth={1.5}
            className={cn("mr-2", {
              [`fill-[${isAccent.headerIcons ? accent : textColor}]`]: icons === "filled",
              [`text-[${accent}]`]: isAccent.headerIcons,
              "mr-[2px]": isCard
            })}
          />
        )}
        <div
          className={cn(`block text-[calc(${size}px+${fontSize}%)]`, {
            "text-[7px]": isCard
          })}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export { ResumeDocumentHeading }
