import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { authService } from "@/entities/user"
import { IAuthLoginForm, IAuthTokenResponse } from "@/shared/lib/types"

type TEmailLoginMutation = UseMutationOptions<
  AxiosResponse<IAuthTokenResponse, any>,
  any,
  IAuthLoginForm,
  unknown
>

export const useLoginMutation = (settings?: TEmailLoginMutation) =>
  useMutation({
    mutationKey: ["email login"],
    mutationFn: (data: IAuthLoginForm) => authService.login(data),
    ...settings
  })
