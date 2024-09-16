"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useAppDispatch } from "@/app/store"
import { hideIsNameTyped, updatePersonalDetails } from "@/entities/resume"

const addResumeSchema = z
  .object({
    name: z.string().min(1, { message: "Name must have than 1 character" })
  })
  .required()

export const useAddResumeName = () => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof addResumeSchema>>({
    resolver: zodResolver(addResumeSchema),
    mode: "onChange",
    defaultValues: {
      name: ""
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof addResumeSchema>) => {
    dispatch(updatePersonalDetails({ values: { name: values.name } }))
    dispatch(hideIsNameTyped())
  })

  const onSkip = () => {
    dispatch(hideIsNameTyped())
  }

  return {
    form,
    functions: { onSubmit, onSkip }
  }
}
