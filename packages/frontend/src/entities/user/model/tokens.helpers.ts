import Cookies from "js-cookie"

export const enum EnumTokens {
  "ACCESS_TOKEN" = "accessToken",
  "REFRESH_TOKEN" = "refreshToken"
}

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
  return accessToken || null
}

export const getHeaders = (token: string | null) =>
  token ? { Authorization: `Bearer ${token}` } : {}

export const getDefaultHeaders = () => ({
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
})

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
