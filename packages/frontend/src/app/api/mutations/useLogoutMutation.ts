import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { redirect } from "next/navigation"

import { authService } from "@/entities/common"

type TEmailLoginMutation = UseMutationOptions<AxiosResponse<boolean, any>, any, any, unknown>

export const useLogoutMutation = (settings?: TEmailLoginMutation) => {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess() {
      redirect("/")
    },
    ...settings
  })
}
