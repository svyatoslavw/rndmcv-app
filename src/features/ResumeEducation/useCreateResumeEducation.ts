import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { createResumeItem, toggleStatus } from "@/entities/resume"
import { type IEducation, resumeEducationSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"

export const useCreateResumeEducation = () => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof resumeEducationSchema>>({
    resolver: zodResolver(resumeEducationSchema),
    defaultValues: {
      school: "",
      degree: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      description: ""
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof resumeEducationSchema>) => {
    dispatch(createResumeItem({ key: "education", item: values as IEducation }))
    dispatch(toggleStatus({ key: "isCreating", content: "education" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
