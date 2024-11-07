import { cn } from "@/shared/lib/utils"
import { TypeIconName } from "@/shared/types"
import { Icon } from "@/shared/ui"

interface ResumePersonInfoItemProps {
  icon: TypeIconName
  text: string
  isLink?: boolean
  className?: string
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
  className,
  url = ""
}: ResumePersonInfoItemProps) => {
  return (
    <h5
      className={cn("flex items-center gap-2", className, {
        "gap-[2px]": isCard
      })}
    >
      <Icon name={icon} size={isCard ? 5 : 14} />
      {isLink ? (
        <a
          className={`text-[${isCard ? `4px` : `calc(5px+${fontSize}px)`}] h-fit`}
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          {text}
        </a>
      ) : (
        <span className={`text-[${isCard ? `4px` : `calc(5px+${fontSize}px)`}] h-fit`}>{text}</span>
      )}
    </h5>
  )
}

export { ResumePersonInfoItem }
