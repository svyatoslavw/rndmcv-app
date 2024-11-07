import type { TypeIconName } from "@/shared/types"

import { LucideProps } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"
import dynamic from "next/dynamic"
import { memo } from "react"


interface IconProps extends LucideProps {
  name: TypeIconName
}

const Icon = memo(({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return <LucideIcon {...props} />
})

Icon.displayName = "Icon"

export { Icon }
