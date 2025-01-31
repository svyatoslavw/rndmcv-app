import { LucideProps } from "lucide-react"
import { DynamicIcon } from "lucide-react/dynamic"

import type { TypeIconName } from "../types"

interface IconProps extends LucideProps {
  name: TypeIconName
}

const Icon = ({ name, ...props }: IconProps) => {
  return <DynamicIcon name={name} {...props} />
}

export { Icon }
