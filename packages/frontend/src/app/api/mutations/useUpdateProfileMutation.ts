import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

import { userService } from "@/entities/user"
import { IUpdateUserForm, IUser } from "@/shared/lib/types"

type TUpdateProfileMutation = UseMutationOptions<
  AxiosResponse<IUser, any>,
  unknown,
  IUpdateUserForm,
  unknown
>

export const useUpdateProfileMutation = (settings?: TUpdateProfileMutation) =>
  useMutation<AxiosResponse<IUser, any>, unknown, IUpdateUserForm, unknown>({
    mutationKey: ["update profile"],
    mutationFn: (data: IUpdateUserForm) => userService.update(data),
    ...settings
  })
