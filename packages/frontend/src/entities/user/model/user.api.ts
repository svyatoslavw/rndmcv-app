import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { IAuthEmailConfirmationForm, IAuthEmailLoginForm, IAuthRegisterForm } from "@/shared/lib"

const baseUrl = process.env.SERVER_URL as string

export const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  endpoints: (build) => ({
    getUserById: build.query({
      query: () => ({ url: "/auth", method: "GET" })
    }),
    login: build.mutation({
      query: (data: IAuthEmailLoginForm) => ({
        url: "/auth/login",
        method: "POST",
        body: data
      })
    }),
    register: build.mutation({
      query: (data: IAuthRegisterForm) => ({
        url: "/auth/register",
        method: "POST",
        body: data
      })
    }),
    emailConfirmation: build.mutation({
      query: (data: IAuthEmailConfirmationForm) => ({
        url: `/auth/confirmation`,
        method: "POST",
        body: data
      })
    })
  })
})

export const {
  useGetUserByIdQuery,
  useEmailConfirmationMutation,
  useLoginMutation,
  useRegisterMutation
} = userApi
