import { LucideIcon } from "lucide-react"

import { TApplyAccent, THeadingIcon, THeadingSize, THeadingStyle } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"

interface ResumeDocumentHeadingProps {
  fontSize: number
  applyAccent: TApplyAccent
  style: THeadingStyle
  size: THeadingSize
  icons: THeadingIcon
  Icon: LucideIcon
  accent: string
  children?: React.ReactNode
}

const ResumeDocumentHeading = ({
  accent,
  applyAccent,
  fontSize,
  children,
  size,
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
        [`after:bg-[${accent}]`]: applyAccent.headingsLines,
        [`text-[${accent}]`]: applyAccent.headings,
        ["w-fit border-b-[3px] border-neutral-500"]: style === "underline",
        [`border-[${accent}]`]: applyAccent.headingsLines,
        ["w-full bg-neutral-100 text-center"]: style === "box"
      })}
    >
      <div
        className={cn("flex items-center", {
          "w-full justify-center bg-neutral-100 text-black": style === "box",
          "w-full justify-center border-y-2": style === "topBottomLine",
          [`border-[${accent}]`]: applyAccent.headingsLines,
          [`text-[${accent}]`]: applyAccent.headings,
          [`text-[calc(${size}px+${fontSize}%)]`]: true
        })}
      >
        {icons !== "none" && (
          <Icon
            size={size}
            strokeWidth={1.5}
            className={cn("mr-2", {
              [`fill-[${accent}]`]: icons === "filled" && applyAccent.headerIcons
            })}
          />
        )}
        <div className={`block text-[calc(${size}px+${fontSize}%)]`}>Education</div>
      </div>
    </div>
  )
}

export { ResumeDocumentHeading }
