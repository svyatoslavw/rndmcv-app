import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import { useCredentials } from "./useCredentials"
import { useConfirmationMutation, useLoginMutation } from "@/app/api/mutations"
import { useAppDispatch } from "@/app/store"
import { resumeService } from "@/entities/common"
import { setResumesFromServer } from "@/entities/resume"
import { authConfirmationSchema } from "@/shared/lib/constants"
import { IAuthConfirmationForm } from "@/shared/lib/types"

const useConfirmationForm = () => {
  const dispatch = useAppDispatch()
  const { push } = useRouter()

  const { credential } = useCredentials()
  const countDownRef = React.useRef<NodeJS.Timeout>()
  const [seconds, setSeconds] = React.useState(20)

  React.useEffect(() => {
    if (!seconds) return
    countDownRef.current = setInterval(() => setSeconds((seconds) => seconds - 1), 1000)
    return () => clearInterval(countDownRef.current)
  }, [seconds])

  React.useEffect(() => {
    if (!seconds) clearInterval(countDownRef.current)
  }, [seconds])

  const form = useForm<IAuthConfirmationForm>({
    resolver: zodResolver(authConfirmationSchema),
    defaultValues: {
      email: credential,
      code: ""
    }
  })

  const { mutate: mutateLogin, isPending: loadingLogin } = useLoginMutation()

  const {
    mutate: mutateConfirmation,
    isSuccess,
    isPending: loadingEmail
  } = useConfirmationMutation({
    onSuccess: async ({ data }) => {
      const { data: resumes } = await resumeService.getByUserId(data.user.id)

      if (resumes && resumes.length) dispatch(setResumesFromServer({ resumes }))

      push("/")
      toast.success("Successfully login!")
    }
  })

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully login!")
      push("/")
    }
  }, [isSuccess, push])

  const onSubmit = form.handleSubmit((values: IAuthConfirmationForm) => {
    mutateConfirmation(values)
  })

  const onSendConfirmationCode = () => {
    mutateLogin({ email: credential, password: "some_password" })
  }

  return {
    state: {
      loading: loadingEmail || loadingLogin,
      seconds
    },
    form,
    functions: { onSubmit, onSendConfirmationCode }
  }
}

export { useConfirmationForm }
