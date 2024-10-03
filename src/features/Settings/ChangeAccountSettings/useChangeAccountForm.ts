"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"

import { useProfile } from "@/entities/user"
import { useUpdateProfileMutation } from "@/shared/lib/api/mutations"
import { updateUserSchema } from "@/shared/lib/constants"
import type { IUpdateUserForm } from "@/shared/lib/types"

export const useChangeAccountForm = () => {
  const { profile } = useProfile()

  const { mutate, isPending: isLoading } = useUpdateProfileMutation({
    onSuccess: () => {
      toast.success("Profile updated")
    }
  })

  const form = useForm<IUpdateUserForm>({
    mode: "onChange",
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      email: profile?.email,
      name: profile?.name,
      image: profile?.image,
      newPassword: "",
      oldPassword: ""
    }
  })

  const onSubmit = form.handleSubmit(async (data: z.infer<typeof updateUserSchema>) => mutate(data))

  return {
    form,
    functions: { onSubmit },
    state: { loading: isLoading },
    profile
  }
}
