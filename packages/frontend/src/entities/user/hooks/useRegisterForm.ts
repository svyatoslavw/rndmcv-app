import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import { useStage } from "./useStage"
import { useRegisterMutation } from "@/entities/user"
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

  const [mutate, { isLoading }] = useRegisterMutation()

  const onSubmit = registerForm.handleSubmit(async (values: IRegisterForm) => {
    const { confirmPassword, ...rest } = values
    const { data } = await mutate(rest)

    if (data) {
      push("/")
      toast.success("Account created successfully!")
    }
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
