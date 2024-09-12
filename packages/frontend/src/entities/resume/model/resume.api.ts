import { FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { getAccessToken, getHeaders } from "@/entities/user/model/tokens.helpers"
import { ApiErrorResult, ApiSuccessResult, ICreateResume, IResume } from "@/shared/lib/types"

const baseUrl = process.env.SERVER_URL as string

export const resumeApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
  }),
  endpoints: (build) => ({
    getResumesByUserId: build.query<IResume[], string>({
      query: (userId) => ({
        url: `/resumes/${userId}`
      })
    }),
    updateResume: build.mutation<IResume, IResume>({
      queryFn: async (body, api, extraOptions, baseQuery) => {
        const token = getAccessToken()
        const headers = token ? { Authorization: `Bearer ${token}` } : {}

        const result = await baseQuery({
          url: `/resumes/${body.id}`,
          method: "PATCH",
          body,
          headers
        })

        return result as { data: IResume } | { error: FetchBaseQueryError }
      }
    }),
    createResume: build.mutation<IResume, ICreateResume>({
      queryFn: async (body, api, extraOptions, baseQuery) => {
        const token = getAccessToken()
        const headers = getHeaders(token)

        const result = await baseQuery({
          url: "/resumes",
          method: "POST",
          body,
          headers
        })

        return result as ApiSuccessResult<IResume> | ApiErrorResult
      }
    })
  })
})

export const { useGetResumesByUserIdQuery, useUpdateResumeMutation } = resumeApi
