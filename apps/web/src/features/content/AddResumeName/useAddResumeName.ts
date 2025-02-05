"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useResumeActions } from "@/entities/resume"

const addResumeSchema = z
  .object({
    name: z.string().min(1, { message: "Name must have than 1 character" })
  })
  .required()

export const useAddResumeName = () => {
  const { updateGeneralFlag, updatePersonalDetails } = useResumeActions()

  const form = useForm<z.infer<typeof addResumeSchema>>({
    resolver: zodResolver(addResumeSchema),
    mode: "onChange",
    defaultValues: {
      name: ""
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof addResumeSchema>) => {
    updatePersonalDetails({ values: { name: values.name } })
    updateGeneralFlag({ key: "isNameTyped", value: false })
  })

  const onSkip = () => {
    updateGeneralFlag({ key: "isNameTyped", value: false })
  }

  return {
    form,
    functions: { onSubmit, onSkip }
  }
}
