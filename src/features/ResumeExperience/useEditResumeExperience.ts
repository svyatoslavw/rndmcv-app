import { updateExperienceDetails } from "@/entities/resume/model/resume.slice"
import { toggleState } from "@/entities/resume/model/status.slice"
import { IExperience, resumeExperienceSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const useEditResumeExperience = ({ experience }: { experience: IExperience }) => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof resumeExperienceSchema>>({
    resolver: zodResolver(resumeExperienceSchema),
    defaultValues: {
      employer: experience.employer || "",
      job: experience.job || "",
      city: experience.city || "",
      country: experience.country || "",
      startDate: experience.startDate || "",
      endDate: experience.endDate || "",
      description: experience.description || ""
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof resumeExperienceSchema>) => {
    for (const [key, value] of Object.entries(values)) {
      dispatch(updateExperienceDetails({ key: key as keyof IExperience, value }))
    }
    dispatch(toggleState({ key: "isEditing", content: "experience" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
