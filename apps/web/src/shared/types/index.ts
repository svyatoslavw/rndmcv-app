import { LucideIcon } from "lucide-react"

export * from "./resume.types"
// export * from "./slices.types"
export * from "./ai.types"
export * from "./user.types"

export type DefaultIcon = LucideIcon
export type CustomIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>
>
