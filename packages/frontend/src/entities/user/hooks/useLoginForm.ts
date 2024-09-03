import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import { useCredentials } from "./useCredentials"
import { useStage } from "./useStage"
import { useLoginMutation } from "@/entities/user"
import { authLoginSchema } from "@/shared/lib/constants"
import { IAuthLoginForm } from "@/shared/lib/types"
import { isErrorWithMessage, isFetchBaseQueryError } from "@/shared/lib/utils"

const ACCESS_TOKEN = "accessToken"

export const useLoginForm = () => {
  const { setStage } = useStage()
  const { push } = useRouter()
  const { setCredential } = useCredentials()

  const form = useForm<IAuthLoginForm>({
    resolver: zodResolver(authLoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const [mutate, { isLoading: isPending, isSuccess, error, data }] = useLoginMutation()

  const onSubmit = form.handleSubmit(async (values: IAuthLoginForm) => {
    setCredential(values.email)

    const { data, error } = await mutate(values)

    if (data) {
      if (ACCESS_TOKEN in data) {
        push("/")
        toast.success("Successfully login!")
      } else {
        setStage("confirmation")
        const toastId = toast.loading("Confirm your account")
        setTimeout(() => {
          toast.dismiss(toastId)
        }, 2000)
      }
    }

    if (error) {
      if (isFetchBaseQueryError(error) && isErrorWithMessage(error.data)) {
        toast.error(error.data.message)
      }
    }
  })

  const onSignup = () => setStage("register")

  return {
    state: { isLoading: isPending },
    form,
    functions: { onSubmit, onSignup }
  }
}
