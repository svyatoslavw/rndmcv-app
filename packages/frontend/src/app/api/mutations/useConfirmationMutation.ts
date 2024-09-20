import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { authService } from "@/entities/user"
import { IAuthConfirmationForm, TAuthResponse } from "@/shared/lib/types"

type TConfirmationMutation = UseMutationOptions<
  AxiosResponse<TAuthResponse, any>,
  unknown,
  IAuthConfirmationForm,
  unknown
>

export const useConfirmationMutation = (settings?: TConfirmationMutation) =>
  useMutation<AxiosResponse<TAuthResponse, any>, unknown, IAuthConfirmationForm, unknown>({
    mutationKey: ["email confirmation"],
    mutationFn: (data: IAuthConfirmationForm) => authService.confirmation(data),
    ...settings
  })
