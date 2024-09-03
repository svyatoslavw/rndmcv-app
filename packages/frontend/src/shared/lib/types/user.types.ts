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

export interface IUser {
  id: string
  createdAt: string
  loggedAt: string

  login: string
  email: string
  role: EnumUserRoles

  code?: string
  codeExpiration?: string
}
