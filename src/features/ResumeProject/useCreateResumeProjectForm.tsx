import { createProject } from "@/entities/resume/model/resume.slice"
import { toggleState } from "@/entities/resume/model/status.slice"
import { type IProject, resumeProjectSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
    dispatch(createProject(values as IProject))
    dispatch(toggleState({ key: "isCreating", content: "projects" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
