import { TypeIconName } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"
import { Icon } from "@/shared/ui"

interface ResumePersonInfoItemProps {
  icon: TypeIconName
  text: string
  isLink?: boolean
  url?: string
  isCard?: boolean
  fontSize: number
}

const ResumePersonInfoItem = ({
  icon,
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
      <Icon name={icon} size={isCard ? 5 : 14} />
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
