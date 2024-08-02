import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { createResumeItem, toggleStatus } from "@/entities/resume"
import { IExperience, resumeExperienceSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"

export const useCreateResumeExperience = () => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof resumeExperienceSchema>>({
    resolver: zodResolver(resumeExperienceSchema),
    defaultValues: {
      employer: "",
      job: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      description: ""
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof resumeExperienceSchema>) => {
    dispatch(createResumeItem({ key: "experience", item: values as IExperience }))
    dispatch(toggleStatus({ key: "isCreating", content: "experience" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
