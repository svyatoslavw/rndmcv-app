import { createExperience } from "@/entities/resume/model/resume.slice"
import { toggleState } from "@/entities/resume/model/status.slice"
import { IExperience, resumeExperienceSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
    dispatch(createExperience(values as IExperience))
    dispatch(toggleState({ key: "isCreating", content: "experience" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
