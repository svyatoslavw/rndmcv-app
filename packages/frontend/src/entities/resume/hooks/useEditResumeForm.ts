"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { ZodSchema, z } from "zod"

import { TUpdateKey } from "../model/resume.types"

import { toggleStatus, updateResumeItemDetails } from "@/entities/resume"
import { useAppDispatch } from "@/shared/lib/store"
import { isDate, isString } from "@/shared/lib/utils"

interface UseEditResumeFormProps<T extends ZodSchema> {
  schema: T
  defaultValues: z.infer<T>
  content: TUpdateKey
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
    for (const [field, value] of Object.entries(values)) {
      if (isString(value) || isDate(value)) {
        dispatch(updateResumeItemDetails({ key: content, field, value }))
      } else {
        toast.error(`Unexpected value type (${value}) for ${field}:`)
      }
    }
    dispatch(toggleStatus({ key: "isEditing", content }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
