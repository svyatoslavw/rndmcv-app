import { LucideProps } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"
import dynamic from "next/dynamic"

import { TypeIconName } from "@/shared/lib/types"

interface IconProps extends LucideProps {
  name: TypeIconName
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return <LucideIcon {...props} />
}
export { Icon }
