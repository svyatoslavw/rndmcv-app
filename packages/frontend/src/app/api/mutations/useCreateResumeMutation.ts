import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { resumeService } from "@/entities/common"
import { ICreateResume, IResume } from "@/shared/lib/types"

type TCreateResumeMutation = UseMutationOptions<
  AxiosResponse<IResume, any>,
  unknown,
  ICreateResume,
  unknown
>

export const useCreateResumeMutation = (settings?: TCreateResumeMutation) =>
  useMutation<AxiosResponse<IResume, any>, unknown, ICreateResume, unknown>({
    mutationKey: ["create resume"],
    mutationFn: (data: ICreateResume) => resumeService.create(data),
    ...settings
  })
