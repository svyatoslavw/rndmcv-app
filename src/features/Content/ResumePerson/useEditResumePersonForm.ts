"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"

import { useAppDispatch } from "@/app/store"
import { toggleStatus, updatePersonalDetails } from "@/entities/resume"
import { resumePersonSchema } from "@/shared/constants"
import { type IPerson } from "@/shared/types"

export const useEditResumePersonForm = ({ content }: { content: IPerson }) => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof resumePersonSchema>>({
    resolver: zodResolver(resumePersonSchema),
    defaultValues: {
      name: content.name,
      job: content.job,
      email: content.email,
      phone: content.phone,
      address: content.address,
      links: content.links,
      information: content.information
    }
  })

  useEffect(() => {
    if (Object.keys(form.formState.errors).length > 0) {
      const { errors } = form.formState
      const firstError = Object.keys(errors)[0] as keyof typeof errors

      toast.error(errors[firstError]?.message || "Something went wrong")
    }
  }, [form.formState])

  const onSubmit = form.handleSubmit((values: z.infer<typeof resumePersonSchema>) => {
    dispatch(updatePersonalDetails({ values }))
    dispatch(toggleStatus({ key: "isEditing", content: "person" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
