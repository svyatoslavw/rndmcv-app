import { createEducation, toggleState } from "@/entities/resume"
import { type IEducation, resumeEducationSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
    dispatch(createEducation(values as IEducation))
    dispatch(toggleState({ key: "isCreating", content: "education" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
