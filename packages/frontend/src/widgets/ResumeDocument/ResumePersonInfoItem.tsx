import { LucideIcon } from "lucide-react"

import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"

interface ResumePersonInfoItemProps {
  Icon: LucideIcon
  text: string
}

const ResumePersonInfoItem = ({ Icon, text }: ResumePersonInfoItemProps) => {
  const fontSize = useAppSelector((state) => state.customization.spacing.fontSize)
  return (
    <div className={cn("flex items-center gap-2", { [`text-[calc(10px+${fontSize}%)]`]: true })}>
      <Icon size={13} />
      <span>{text}</span>
    </div>
  )
}

export { ResumePersonInfoItem }
