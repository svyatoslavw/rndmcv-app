import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { authService } from "@/entities/user"
import { IAuthRegisterForm, IAuthTokenResponse } from "@/shared/lib/types"

type TRegisterMutation = UseMutationOptions<
  AxiosResponse<IAuthTokenResponse, any>,
  any,
  IAuthRegisterForm,
  unknown
>

export const useRegisterMutation = (settings?: TRegisterMutation) =>
  useMutation({
    mutationKey: ["register"],
    mutationFn: (data: IAuthRegisterForm) => authService.register(data),
    ...settings
  })
