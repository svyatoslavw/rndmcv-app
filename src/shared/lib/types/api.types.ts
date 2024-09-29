import { AxiosRequestConfig as ApiRequestConfig } from "axios"

export interface BaseResponse {
  message: string
}

export interface QuerySettings<Func = unknown> {
  config?: ApiRequestConfig
  options?: Omit<
    import("@tanstack/react-query").UseQueryOptions<
      Awaited<ReturnType<Func>>,
      any,
      Awaited<ReturnType<Func>>,
      any
    >,
    "queryKey"
  >
}

export interface UpdateSubscription {
  email: string
  total: number
  customerId: string
}

export interface IUpdateUserForm {
  email?: string
  name?: string
  image?: string
  oldPassword?: string
  newPassword?: string
}

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
