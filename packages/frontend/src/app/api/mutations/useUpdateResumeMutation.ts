import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { resumeService } from "@/entities/common"
import { IResume } from "@/shared/lib/types"

type TUpdateResumeMutation = UseMutationOptions<
  AxiosResponse<IResume, any>,
  unknown,
  IResume,
  unknown
>

export const useUpdateResumeMutation = (settings?: TUpdateResumeMutation) =>
  useMutation<AxiosResponse<IResume, any>, unknown, IResume, unknown>({
    mutationKey: ["update resume"],
    mutationFn: (data: IResume) => resumeService.update(data),
    ...settings
  })
