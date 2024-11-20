import { IResume } from "./slices.types"

export enum EnumUserRoles {
  USER = "USER",
  ADMIN = "ADMIN"
}

export interface IUser {
  id: number
  createdAt: string
  loggedAt: string

  name: string
  email: string
  image: string
  role: EnumUserRoles

  resumes: IResume[]
}

export type TAuthProvider = "github" | "google" | "spotify"

export type TIconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>
>
export type TLoginButton = {
  provider: TAuthProvider
  title: string
  isLoading: boolean
  icon: TIconType
}
