import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { fileService } from "@/entities/common"

type TUploadFileMutation = UseMutationOptions<
  AxiosResponse<{ url: string }, any>,
  unknown,
  FormData,
  unknown
>

export const useUploadFileMutation = (settings?: TUploadFileMutation) =>
  useMutation<AxiosResponse<{ url: string }, any>, unknown, FormData, unknown>({
    mutationKey: ["upload file"],
    mutationFn: (data: FormData) => fileService.upload(data),
    ...settings
  })
