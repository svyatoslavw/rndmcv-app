import { FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { getAccessToken, getDefaultHeaders, getHeaders, saveTokenStorage } from "./tokens.helpers"
import { resumeApi, resumeSlice } from "@/entities/resume"
import {
  ApiErrorResult,
  ApiSuccessResult,
  IAuthConfirmationForm,
  IAuthLoginForm,
  IAuthRegisterForm,
  IAuthTokenResponse,
  IUpdateUserForm,
  IUser,
  TAuthResponse
} from "@/shared/lib/types"

const baseUrl = process.env.SERVER_URL as string

export const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include"
  }),
  tagTypes: ["user"],
  endpoints: (build) => ({
    getProfile: build.query<IUser, void>({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        const token = getAccessToken()
        const headers = getHeaders(token)
        const defaultHeaders = getDefaultHeaders()

        const result = await baseQuery({
          url: "/users/profile",
          method: "GET",
          headers: {
            ...headers,
            ...defaultHeaders
          }
        })

        return result as { data: IUser } | { error: FetchBaseQueryError }
      },
      providesTags: [{ type: "user", id: "PROFILE" }]
    }),
    uploadFile: build.mutation<{ url: string }, FormData>({
      query: (data) => ({
        url: "/upload",
        method: "POST",
        body: data
      })
    }),
    updateProfile: build.mutation<IUser, IUpdateUserForm>({
      queryFn: async (body, __, ___, baseQuery) => {
        const token = getAccessToken()
        const headers = getHeaders(token)
        const defaultHeaders = getDefaultHeaders()

        const result = await baseQuery({
          url: "/users/profile",
          method: "PATCH",
          body,
          headers: {
            ...headers,
            ...defaultHeaders
          }
        })

        return result as ApiSuccessResult<IUser> | ApiErrorResult
      },
      invalidatesTags: [{ type: "user", id: "PROFILE" }]
    }),
    login: build.mutation<TAuthResponse, IAuthLoginForm>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data
      })
    }),
    register: build.mutation<IAuthTokenResponse, IAuthRegisterForm>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          if (data.accessToken) saveTokenStorage(data.accessToken)
        } catch (error) {
          console.error("Failed to register:", error)
        }
      }
      // queryFn: async (body, api, extraOptions, baseQuery) => {
      //   const result = await baseQuery({
      //     url: "/auth/register",
      //     method: "POST",
      //     body
      //   })

      //   const { data } = result as ApiSuccessResult<IAuthTokenResponse>

      //   if (data.accessToken) saveTokenStorage(data.accessToken)

      //   return result as ApiSuccessResult<IAuthTokenResponse> | ApiErrorResult
      // }
    }),
    emailConfirmation: build.mutation<IAuthTokenResponse, IAuthConfirmationForm>({
      query: (data) => ({
        url: `/auth/confirmation`,
        method: "POST",
        body: data
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled
          if (data.accessToken) saveTokenStorage(data.accessToken)
          const resumeResult = await dispatch(
            resumeApi.endpoints.getResumesByUserId.initiate(data.user.id)
          ).unwrap()

          if (resumeResult && Array.isArray(resumeResult)) {
            dispatch(resumeSlice.actions.setResumesFromServer({ resumes: resumeResult }))
          }
        } catch (error) {
          console.error("Failed to confirm:", error)
        }
      }
    }),
    logout: build.mutation<boolean, void>({
      queryFn: async (_, __, ___, baseQuery) => {
        const token = getAccessToken()
        const headers = getHeaders(token)
        const defaultHeaders = getDefaultHeaders()

        const result = await baseQuery({
          url: "/auth/logout",
          method: "POST",
          headers: {
            ...headers,
            ...defaultHeaders
          }
        })

        return result as ApiSuccessResult<boolean> | ApiErrorResult
      },
      invalidatesTags: [{ type: "user", id: "PROFILE" }]
    })
  })
})

export const {
  useGetProfileQuery,
  useEmailConfirmationMutation,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useUploadFileMutation,
  useUpdateProfileMutation
} = userApi
