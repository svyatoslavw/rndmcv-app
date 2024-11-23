"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ZodSchema, z } from "zod"

import { SectionKeyWithoutPerson } from "../../domain"

import { useGeneralActions } from "@/entities/resume"

interface UseEditResumeFormProps<T extends ZodSchema> {
  schema: T
  defaultValues: z.infer<T>
  content: SectionKeyWithoutPerson
}

export const useEditResumeForm = <T extends ZodSchema>({
  schema,
  defaultValues,
  content
}: UseEditResumeFormProps<T>) => {
  const { updateResumeItemDetails, toggleStatus } = useGeneralActions()

  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues
  })

  const onSubmit = form.handleSubmit((values: z.infer<T>) => {
    updateResumeItemDetails({ key: content, values })
    toggleStatus({ key: "isEditing", content })
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
