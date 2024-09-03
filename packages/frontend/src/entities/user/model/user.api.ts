import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { saveTokenStorage } from "./tokens.helpers"
import {
  IAuthConfirmationForm,
  IAuthLoginForm,
  IAuthRegisterForm,
  IAuthTokenResponse,
  TAuthResponse
} from "@/shared/lib/types"

const baseUrl = process.env.SERVER_URL as string

export const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
  }),
  endpoints: (build) => ({
    getUserById: build.query({
      query: () => ({ url: "/auth", method: "GET" })
    }),
    login: build.mutation<TAuthResponse, IAuthLoginForm>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          if ("accessToken" in data) saveTokenStorage(data.accessToken)
        } catch (error) {
          console.error("Failed to login:", error)
        }
      }
    }),
    register: build.mutation<IAuthTokenResponse, IAuthRegisterForm>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          if (data.accessToken) saveTokenStorage(data.accessToken)
        } catch (error) {
          console.error("Failed to register:", error)
        }
      }
    }),
    emailConfirmation: build.mutation<IAuthTokenResponse, IAuthConfirmationForm>({
      query: (data) => ({
        url: `/auth/confirmation`,
        method: "POST",
        body: data
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          if (data.accessToken) saveTokenStorage(data.accessToken)
        } catch (error) {
          console.error("Failed to confirm:", error)
        }
      }
    })
  })
})

export const {
  useGetUserByIdQuery,
  useEmailConfirmationMutation,
  useLoginMutation,
  useRegisterMutation
} = userApi
