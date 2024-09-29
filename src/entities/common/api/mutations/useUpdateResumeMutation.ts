import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { resumeService } from "@/entities/common"
import { IResumeResponse, IUpdateResume } from "@/shared/lib/types"

type TUpdateResumeMutation = UseMutationOptions<
  AxiosResponse<IResumeResponse, any>,
  unknown,
  IUpdateResume,
  unknown
>

export const useUpdateResumeMutation = (settings?: TUpdateResumeMutation) =>
  useMutation<AxiosResponse<IResumeResponse, any>, unknown, IUpdateResume, unknown>({
    mutationKey: ["update resume"],
    mutationFn: (data) => resumeService.update(data),
    ...settings
  })
