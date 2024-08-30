import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import { useStage } from "./useStage"
import { useRegisterMutation } from "@/entities/user"
import { authRegisterSchema } from "@/shared/lib"

interface IRegisterForm {
  email: string
  login: string
  phone: string
  password: string
  confirmPassword: string
}

export const useRegisterForm = () => {
  const { push } = useRouter()
  const { setStage } = useStage()

  const registerForm = useForm<IRegisterForm>({
    resolver: zodResolver(authRegisterSchema),
    defaultValues: {
      email: "",
      login: "",
      password: ""
    }
  })

  const [mutate, { isLoading, isSuccess }] = useRegisterMutation()

  React.useEffect(() => {
    if (isSuccess) {
      push("/")
      toast.success("Account created successfully!")
    }
  }, [isSuccess])

  const onSubmit = registerForm.handleSubmit((values: IRegisterForm) => {
    const { confirmPassword, ...rest } = values
    mutate(rest)
  })

  const onSignin = () => setStage("login")

  return {
    state: {
      isLoading
    },
    form: registerForm,
    functions: { onSubmit, onSignin }
  }
}
