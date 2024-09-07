import { LucideIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"

interface ResumePersonInfoItemProps {
  Icon: LucideIcon
  text: string
  isLink?: boolean
  url?: string
  isCard?: boolean
  fontSize: number
}

const ResumePersonInfoItem = ({
  Icon,
  text,
  isLink = false,
  isCard,
  fontSize,
  url = ""
}: ResumePersonInfoItemProps) => {
  return (
    <h5
      className={cn("flex items-center gap-2", {
        "gap-[2px]": isCard
      })}
    >
      <Icon size={isCard ? 5 : 14} />
      {isLink ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`text-[${isCard ? `4px` : `calc(11px+${fontSize}%)`}] h-fit`}
        >
          {text}
        </a>
      ) : (
        <span className={`text-[${isCard ? `4px` : `calc(11px+${fontSize}%)`}] h-fit`}>{text}</span>
      )}
    </h5>
  )
}

export { ResumePersonInfoItem }
