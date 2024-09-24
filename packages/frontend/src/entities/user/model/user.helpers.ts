import Cookies from "js-cookie"

import { EnumSubscriptionType, IResume, IUser } from "@/shared/lib/types"

export const enum EnumTokens {
  "ACCESS_TOKEN" = "accessToken",
  "REFRESH_TOKEN" = "refreshToken"
}

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
  return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: "localhost",
    sameSite: "strict",
    expires: 1
  })
}

export const removeCookiesFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN)
}

export const canAddMoreResumes = (profile: IUser | null, resumes: IResume[]) => {
  switch (profile?.subscription.type) {
    case EnumSubscriptionType.STANDART:
      return resumes.length < 3
    case EnumSubscriptionType.PREMIUM:
      return true
    case EnumSubscriptionType.BASIC:
    default:
      return resumes.length < 1
  }
}
