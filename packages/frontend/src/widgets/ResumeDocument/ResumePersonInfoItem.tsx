import { LucideIcon } from "lucide-react"

import { selectCustomizationResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"

interface ResumePersonInfoItemProps {
  Icon: LucideIcon
  text: string
  isLink?: boolean
  url?: string
}

const ResumePersonInfoItem = ({
  Icon,
  text,
  isLink = false,
  url = ""
}: ResumePersonInfoItemProps) => {
  const {
    spacing: { fontSize }
  } = useAppSelector(selectCustomizationResume)

  return (
    <h5 className={cn("flex items-center gap-2")}>
      <Icon size={14} />
      {isLink ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`text-[calc(11px+${fontSize}%)] h-fit`}
        >
          {text}
        </a>
      ) : (
        <span className={`text-[calc(11px+${fontSize}%)] h-fit`}>{text}</span>
      )}
    </h5>
  )
}

export { ResumePersonInfoItem }
