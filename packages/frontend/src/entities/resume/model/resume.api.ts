import { FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { getAccessToken, getHeaders } from "@/entities/user/model/tokens.helpers"
import { ApiErrorResult, ApiSuccessResult, ICreateResume, IResume } from "@/shared/lib/types"

const baseUrl = process.env.SERVER_URL as string

export const resumeApi = createApi({
  reducerPath: "resumeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
  }),
  tagTypes: ["resume", "user"],
  endpoints: (build) => ({
    getResumesByUserId: build.query<IResume[], string>({
      queryFn: async (arg, __, ___, baseQuery) => {
        const result = await baseQuery({
          url: `/resumes/by-user/${arg}`,
          method: "GET"
        })

        return result as ApiSuccessResult<IResume[]> | ApiErrorResult
      },
      providesTags: (result) => (result ? result.map(({ id }) => ({ type: "resume", id })) : [])
    }),
    updateResume: build.mutation<IResume, IResume>({
      queryFn: async (body, api, extraOptions, baseQuery) => {
        const token = getAccessToken()
        const headers = getHeaders(token)

        const result = await baseQuery({
          url: `/resumes/${body.id}`,
          method: "PATCH",
          body,
          headers
        })

        return result as { data: IResume } | { error: FetchBaseQueryError }
      },
      invalidatesTags: [
        { type: "resume", id: "LIST" },
        { type: "user", id: "PROFILE" }
      ]
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
      },
      invalidatesTags: [
        { type: "resume", id: "LIST" },
        { type: "user", id: "PROFILE" }
      ]
    })
  })
})

export const { useGetResumesByUserIdQuery, useUpdateResumeMutation, useCreateResumeMutation } =
  resumeApi
