import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import { useCredentials } from "./useCredentials"
import { useStage } from "./useStage"
import { useLoginMutation } from "@/entities/user"
import { IAuthEmailLoginForm, authLoginSchema } from "@/shared/lib"

export const useLoginForm = () => {
  const { setStage } = useStage()
  const { push } = useRouter()
  const { setCredential } = useCredentials()

  const form = useForm<IAuthEmailLoginForm>({
    resolver: zodResolver(authLoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const [mutate, { isLoading: isPending, isSuccess, data }] = useLoginMutation()

  React.useEffect(() => {
    if (isSuccess) {
      if ("accessToken" in data) {
        push("/")
        toast.success("Successfully login!")
      } else {
        setStage("confirmation")
        toast.loading("Confirm your account!")
      }
    }
  }, [isSuccess, data])

  const onSubmit = form.handleSubmit((values: IAuthEmailLoginForm) => {
    setCredential(values.email)
    mutate(values)
  })

  const onSignup = () => setStage("register")

  return {
    state: { isLoading: isPending },
    form,
    functions: { onSubmit, onSignup }
  }
}
