import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { resumeService } from "../resume.service"

import { ICreateResume, IResumeResponse } from "@/shared/lib/types"

type TCreateResumeMutation = UseMutationOptions<
  AxiosResponse<IResumeResponse, any>,
  unknown,
  ICreateResume,
  unknown
>

export const useCreateResumeMutation = (settings?: TCreateResumeMutation) =>
  useMutation<AxiosResponse<IResumeResponse, any>, unknown, ICreateResume, unknown>({
    mutationKey: ["create resume"],
    mutationFn: (data: ICreateResume) => resumeService.create(data),
    ...settings
  })
