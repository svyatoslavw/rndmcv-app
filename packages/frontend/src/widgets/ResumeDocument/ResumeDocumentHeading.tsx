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
}

const ResumeDocumentHeading = ({
  accent,
  isAccent,
  fontSize,
  children,
  size,
  textColor,
  icons,
  Icon,
  style
}: ResumeDocumentHeadingProps) => {
  return (
    <div
      className={cn("relative mb-2 font-semibold", {
        ["w-full border-b-[3px] border-neutral-500"]: style === "line",
        ["after:block after:h-1 after:w-12 after:rounded-md after:bg-neutral-500 after:content-['']"]:
          style === "shortUnderline",
        [`after:bg-[${accent}]`]: isAccent.headingsLines,
        [`text-[${accent}]`]: isAccent.headings,
        ["w-fit border-b-[3px] border-neutral-500"]: style === "underline",
        [`border-[${accent}]`]: isAccent.headingsLines,
        ["w-full bg-neutral-100 text-center"]: style === "box"
      })}
    >
      <div
        className={cn("flex items-center", {
          "w-full justify-center bg-neutral-100 text-black": style === "box",
          "w-full justify-center border-y-2": style === "topBottomLine",
          [`border-[${accent}]`]: isAccent.headingsLines,
          [`text-[${accent}]`]: isAccent.headings,
          [`text-[calc(${size}px+${fontSize}%)]`]: true
        })}
      >
        {icons !== "none" && (
          <Icon
            size={size}
            strokeWidth={1.5}
            className={cn("mr-2", {
              [`fill-[${isAccent.headerIcons ? accent : textColor}]`]: icons === "filled",
              [`text-[${accent}]`]: isAccent.headerIcons
            })}
          />
        )}
        <div className={`block text-[calc(${size}px+${fontSize}%)]`}>{children}</div>
      </div>
    </div>
  )
}

export { ResumeDocumentHeading }
