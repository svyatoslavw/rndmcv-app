import { LucideIcon } from "lucide-react"

interface ResumePersonInfoItemProps {
  Icon: LucideIcon
  text: string
}

const ResumePersonInfoItem = ({ Icon, text }: ResumePersonInfoItemProps) => {
  return (
    <div className="flex items-center gap-1 text-xs">
      <Icon size={18} />
      <span>{text}</span>
    </div>
  )
}

export { ResumePersonInfoItem }
