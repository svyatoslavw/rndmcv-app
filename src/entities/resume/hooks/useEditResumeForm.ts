"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ZodSchema, z } from "zod"

import { useAppDispatch } from "@/app/store"
import { toggleStatus, updateResumeItemDetails } from "@/entities/resume"
import type { TypeSectionKeyWithoutPerson } from "@/shared/lib/types"

interface UseEditResumeFormProps<T extends ZodSchema> {
  schema: T
  defaultValues: z.infer<T>
  content: TypeSectionKeyWithoutPerson
}

export const useEditResumeForm = <T extends ZodSchema>({
  schema,
  defaultValues,
  content
}: UseEditResumeFormProps<T>) => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues
  })

  const onSubmit = form.handleSubmit((values: z.infer<T>) => {
    dispatch(updateResumeItemDetails({ key: content, values }))
    dispatch(toggleStatus({ key: "isEditing", content }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
