import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"

import { useGetProfileQuery, useUpdateProfileMutation } from "@/entities/user"
import { updateUserSchema } from "@/shared/lib/constants"
import { IUpdateUserForm } from "@/shared/lib/types"
import { isErrorWithMessage, isFetchBaseQueryError } from "@/shared/lib/utils"

export const useChangeAccountForm = () => {
  const { data: profile } = useGetProfileQuery()

  const [mutate, { isLoading }] = useUpdateProfileMutation()

  const form = useForm<IUpdateUserForm>({
    mode: "onChange",
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      email: profile?.email || "",
      login: profile?.login || "",
      image: profile?.image || "",
      newPassword: "",
      oldPassword: ""
    }
  })

  const onSubmit = form.handleSubmit(async (data: z.infer<typeof updateUserSchema>) => {
    const result = await mutate(data)

    if (result.data && !result.error) {
      toast.success("Profile updated")
    }

    if (
      result.error &&
      isFetchBaseQueryError(result.error) &&
      isErrorWithMessage(result.error.data)
    ) {
      toast.error(result.error.data.message)
    }
  })

  return {
    form,
    functions: { onSubmit },
    state: { loading: isLoading },
    profile
  }
}
