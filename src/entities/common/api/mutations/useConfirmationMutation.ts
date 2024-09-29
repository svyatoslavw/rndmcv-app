import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { authService } from "@/entities/common"
import { IAuthConfirmationForm, IAuthTokenResponse } from "@/shared/lib/types"

type TConfirmationMutation = UseMutationOptions<
  AxiosResponse<IAuthTokenResponse, any>,
  unknown,
  IAuthConfirmationForm,
  unknown
>

export const useConfirmationMutation = (settings?: TConfirmationMutation) =>
  useMutation<AxiosResponse<IAuthTokenResponse, any>, unknown, IAuthConfirmationForm, unknown>({
    mutationKey: ["email confirmation"],
    mutationFn: (data: IAuthConfirmationForm) => authService.confirmation(data),
    ...settings
  })
