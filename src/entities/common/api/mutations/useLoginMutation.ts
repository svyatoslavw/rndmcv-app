import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { SignInResponse, signIn } from "next-auth/react"

import { TAuthProvider } from "@/shared/lib/types"

type TEmailLoginMutation = UseMutationOptions<SignInResponse | undefined, any, any, unknown>

export const useLoginMutation = (settings?: TEmailLoginMutation) =>
  useMutation<SignInResponse | undefined, any, any, unknown>({
    mutationKey: ["email login"],
    mutationFn: (provider: TAuthProvider) => signIn(provider),
    ...settings
  })
