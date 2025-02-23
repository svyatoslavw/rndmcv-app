export type TAuthProvider = "github" | "google"

export type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>
>
export type TLoginButton = {
  provider: TAuthProvider
  title: string
  isLoading: boolean
  icon: IconType
}

export interface Column<T> {
  key: keyof T
  render?: (item: T) => JSX.Element
}

export interface IResume {
  id: string
  general: any
  customization: any
}

export const enum EnumUserRoles {
  USER = "USER",
  ADMIN = "ADMIN"
}

export interface IUser {
  id: string
  createdAt: string
  loggedAt: string

  name: string
  email: string
  image: string
  role: EnumUserRoles

  resumes: IResume[]
}
