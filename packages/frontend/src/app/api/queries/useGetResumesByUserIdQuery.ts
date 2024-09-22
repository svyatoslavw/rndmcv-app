import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { resumeService } from "@/entities/resume"
import { getAccessToken } from "@/entities/user"
import { IResume } from "@/shared/lib/types"

type TGetResumesByUserIdQuery = UseQueryOptions<
  AxiosResponse<IResume[], unknown>,
  unknown,
  IResume[],
  any
>

export const useGetResumesByUserIdQuery = (id: string, settings?: TGetResumesByUserIdQuery) => {
  const token = getAccessToken()

  return useQuery<AxiosResponse<IResume[], unknown>, unknown, IResume[], any>({
    queryKey: ["get resumes by user id", id],
    queryFn: () => resumeService.getByUserId(id),
    select: ({ data }) => data,
    enabled: !!token,
    ...settings
  })
}
