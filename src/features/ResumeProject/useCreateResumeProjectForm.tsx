import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { createResumeItem, toggleStatus } from "@/entities/resume"
import { type IProject, resumeProjectSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"

export const useCreateResumeProjectForm = () => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof resumeProjectSchema>>({
    resolver: zodResolver(resumeProjectSchema),
    defaultValues: {
      title: "",
      description: ""
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof resumeProjectSchema>) => {
    dispatch(createResumeItem({ key: "projects", item: values as IProject }))
    dispatch(toggleStatus({ key: "isCreating", content: "projects" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
