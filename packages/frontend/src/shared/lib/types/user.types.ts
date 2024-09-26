import { DefaultSession, Session, User } from "next-auth"

import { IResume } from "./resume-slice.types"

export interface IAuthConfirmationForm {
  email: string
  code: string
}

export interface IAuthLoginForm {
  email: string
  password: string
}

export interface IAuthRegisterForm {
  email: string
  login: string
  password: string
}

export interface IAuthTokenResponse {
  accessToken: string
  user: IUser
}

export interface IAuthMessageResponse {
  message: string
}

export interface IAuthCodeResponse {
  code: string
  expiration: Date
}

export type TAuthResponse = IAuthTokenResponse | IAuthCodeResponse

export enum EnumUserRoles {
  USER = "USER",
  ADMIN = "ADMIN"
}

export enum EnumSubscriptionType {
  BASIC = "BASIC",
  STANDART = "STANDART",
  PREMIUM = "PREMIUM"
}

export interface ISubscription {
  id: string
  createdAt: string
  expiresAt: string

  customerId: string
  price: number
  type: EnumSubscriptionType

  user: IUser
  userId: string
}

export interface IUser {
  id: number
  createdAt: string
  loggedAt: string

  name: string
  email: string
  image: string
  role: EnumUserRoles

  subscription: ISubscription
  resumes: IResume[]

  code?: string
  codeExpiration?: string
}

export interface IUpdateUserForm {
  email?: string
  name?: string
  image?: string
  oldPassword?: string
  newPassword?: string
}

export type TAuthProvider = "github" | "google" | "spotify" | "dribbble" | "notion"
export type TAuthProvidersLoading = Record<TAuthProvider, boolean>
export type TLoginButton = {
  provider: TAuthProvider
  title: string
  isLoading: boolean
  icon: React.ReactElement<any, any>
}

export type TSession = Session | null
export type TDefaultSession = DefaultSession
export type TUser = User
