"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ZodSchema, z } from "zod"

import { createResumeItem } from "../slices/resume.slice"
import { toggleStatus } from "../slices/status.slice"

import { useAppDispatch } from "@/shared/lib/store"
import { SectionKeyWithoutPerson } from "@/shared/types"

interface UseCreateResumeFormProps<T extends ZodSchema> {
  schema: T
  defaultValues: z.infer<T>
  content: SectionKeyWithoutPerson
}

export const useCreateResumeForm = <T extends ZodSchema>({
  schema,
  defaultValues,
  content
}: UseCreateResumeFormProps<T>) => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues
  })

  const onSubmit = form.handleSubmit((values: z.infer<T>) => {
    dispatch(createResumeItem({ key: content, item: values }))
    dispatch(toggleStatus({ key: "isCreating", content }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
