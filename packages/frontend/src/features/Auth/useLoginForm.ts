import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import { EnumTokens } from "../../entities/user/model/user.helpers"

import { useCredentials } from "./useCredentials"
import { useStage } from "./useStage"
import { useLoginMutation } from "@/app/api/mutations"
import { useAppDispatch } from "@/app/store"
import { resumeService } from "@/entities/common"
import { setResumesFromServer } from "@/entities/resume"
import { PUBLIC_URL } from "@/shared/lib/config"
import { authLoginSchema } from "@/shared/lib/constants"
import type { IAuthLoginForm } from "@/shared/lib/types"

export const useLoginForm = () => {
  const dispatch = useAppDispatch()
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

  const { mutate, isPending } = useLoginMutation({
    onSuccess: async ({ data }) => {
      if (data && EnumTokens.ACCESS_TOKEN in data) {
        const { data: resumes } = await resumeService.getByUserId(data.user.id)

        if (resumes && resumes.length) dispatch(setResumesFromServer({ resumes }))

        push(PUBLIC_URL.home())
        toast.success("Successfully login!")
      } else {
        setStage("confirmation")
        form.reset()
        toast("Confirm your account", { icon: "📢" })
      }
    }
  })

  const onSubmit = form.handleSubmit(async (values: IAuthLoginForm) => {
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
