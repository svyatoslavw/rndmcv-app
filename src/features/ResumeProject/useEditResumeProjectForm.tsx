import { toggleStatus, updateResumeItemDetails } from "@/entities/resume"
import { type IProject, resumeProjectSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const useEditResumeProjectForm = ({ project }: { project: IProject }) => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof resumeProjectSchema>>({
    resolver: zodResolver(resumeProjectSchema),
    defaultValues: {
      title: project.title,
      description: project.description
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof resumeProjectSchema>) => {
    for (const [key, value] of Object.entries(values)) {
      dispatch(updateResumeItemDetails({ key: "projects", field: key as keyof IProject, value }))
    }
    dispatch(toggleStatus({ key: "isEditing", content: "projects" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
