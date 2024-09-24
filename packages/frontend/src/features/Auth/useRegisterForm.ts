import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import { useStage } from "./useStage"
import { useRegisterMutation } from "@/app/api/mutations"
import { persistor } from "@/app/store"
import { PUBLIC_URL } from "@/shared/lib/config"
import { authRegisterSchema } from "@/shared/lib/constants"

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

  const { mutate, isPending: isLoading } = useRegisterMutation({
    onSuccess: () => {
      persistor.purge()
      push(PUBLIC_URL.home())
      toast.success("Account created successfully!")
    }
  })

  const onSubmit = registerForm.handleSubmit(async (values: IRegisterForm) => {
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
