import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toggleStatus, updateResumeItemDetails } from "@/entities/resume"
import { type IEducation, resumeEducationSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"

export const useEditResumeEducation = ({ education }: { education: IEducation }) => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof resumeEducationSchema>>({
    resolver: zodResolver(resumeEducationSchema),
    defaultValues: {
      school: education.school || "",
      degree: education.degree || "",
      city: education.city || "",
      country: education.country || "",
      startDate: education.startDate || "",
      endDate: education.endDate || "",
      description: education.description || ""
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof resumeEducationSchema>) => {
    for (const [key, value] of Object.entries(values)) {
      dispatch(updateResumeItemDetails({ key: "education", field: key as keyof IEducation, value }))
    }
    dispatch(toggleStatus({ key: "isEditing", content: "education" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
