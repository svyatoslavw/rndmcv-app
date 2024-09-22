import {
  EnumTokens,
  removeCookiesFromStorage,
  saveTokenStorage
} from "../../user/model/user.helpers"

import { axiosClassic } from "@/app/api"
import {
  IAuthConfirmationForm,
  IAuthLoginForm,
  IAuthRegisterForm,
  IAuthTokenResponse,
  TAuthResponse
} from "@/shared/lib/types"

export const authService = {
  async login(data: IAuthLoginForm) {
    const response = await axiosClassic.post<TAuthResponse>("/auth/login", data)

    if (EnumTokens.ACCESS_TOKEN in response.data) saveTokenStorage(response.data.accessToken)

    return response
  },

  async confirmation(data: IAuthConfirmationForm) {
    const response = await axiosClassic.post<IAuthTokenResponse>("/auth/confirmation-email", data)

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

    return response
  },

  async register(data: IAuthRegisterForm) {
    const response = await axiosClassic.post<IAuthTokenResponse>("/auth/register", data)

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

    return response
  },

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthTokenResponse>("/auth/login/access-token")

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

    return response
  },

  async logout() {
    const response = await axiosClassic.post<boolean>("/auth/logout")

    if (response.data) {
      removeCookiesFromStorage()
    }

    return response
  }
}
