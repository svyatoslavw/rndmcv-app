import { LucideProps } from "lucide-react"
import { DynamicIcon, IconName } from "lucide-react/dynamic"

interface IconProps extends LucideProps {
  name: IconName
}

const Icon = ({ name, ...props }: IconProps) => {
  return <DynamicIcon name={name} {...props} />
}

export { Icon }
