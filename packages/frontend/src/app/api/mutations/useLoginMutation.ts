import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { authService } from "@/entities/common"
import { IAuthLoginForm, TAuthResponse } from "@/shared/lib/types"

type TEmailLoginMutation = UseMutationOptions<
  AxiosResponse<TAuthResponse, any>,
  any,
  IAuthLoginForm,
  unknown
>

export const useLoginMutation = (settings?: TEmailLoginMutation) =>
  useMutation<AxiosResponse<TAuthResponse, any>, any, IAuthLoginForm, unknown>({
    mutationKey: ["email login"],
    mutationFn: (data: IAuthLoginForm) => authService.login(data),
    ...settings
  })
