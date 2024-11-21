import { LucideIcon } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"

export * from "./resume.types"
export * from "./slices.types"
export * from "./user.types"

export type DynamicIcon = keyof typeof dynamicIconImports
export type DefaultIcon = LucideIcon
export type CustomIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>
>
export type TypedPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

export type TypedOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
