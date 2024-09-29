import { DefaultSession, Session, User } from "next-auth"

import { IResume } from "./slices.types"

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

export type TSubscriptionType = "BASIC" | "STANDART" | "PREMIUM"

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

export type TAuthProvider = "github" | "google" | "spotify"
export type TAuthProvidersLoading = Record<TAuthProvider, boolean>
export type TLoginButton = {
  provider: TAuthProvider
  title: string
  isLoading: boolean
  icon: JSX.Element
}

export type TSession = Session | null
export type TDefaultSession = DefaultSession
export type TUser = User

export interface IPricingCard {
  name: string
  type: EnumSubscriptionType
  monthlyPrice: number
  yearlyPrice: number
  monthlyPriceId: string
  yearlyPriceId: string
  description: string
  features: string[]
}
