import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

import { loginThunk } from "../model/auth.actions"

import { useCredentials } from "./useCredentials"
import { useStage } from "./useStage"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { authLoginSchema } from "@/shared/lib/constants"
import { IAuthLoginForm } from "@/shared/lib/types"

export const useLoginForm = () => {
  const { setStage } = useStage()
  const { push } = useRouter()
  const { setCredential } = useCredentials()
  const dispatch = useAppDispatch()

  const isLoading = useAppSelector((state) => state.auth.isLoading)

  const form = useForm<IAuthLoginForm>({
    resolver: zodResolver(authLoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = form.handleSubmit(async (values: IAuthLoginForm) => {
    setCredential(values.email)
    await dispatch(loginThunk({ values, push, setStage }))
  })

  const onSignup = () => setStage("register")

  return {
    state: { isLoading },
    form,
    functions: { onSubmit, onSignup }
  }
}
