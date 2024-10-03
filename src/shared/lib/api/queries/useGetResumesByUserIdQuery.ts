import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { resumeService } from "../resume.service"

import { getAccessToken } from "@/entities/user"
import { IResumeResponse } from "@/shared/lib/types"

type TGetResumesByUserIdQuery = UseQueryOptions<
  AxiosResponse<IResumeResponse[], unknown>,
  unknown,
  IResumeResponse[],
  any
>

export const useGetResumesByUserIdQuery = (id: string, settings?: TGetResumesByUserIdQuery) => {
  const token = getAccessToken()

  return useQuery<AxiosResponse<IResumeResponse[], unknown>, unknown, IResumeResponse[], any>({
    queryKey: ["get resumes by user id", id],
    queryFn: () => resumeService.getByUserId(),
    select: ({ data }) => data,
    enabled: !!token,
    ...settings
  })
}