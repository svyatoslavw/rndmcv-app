import { toggleState, updateProjectDetails } from "@/entities/resume/model/resume.slice"
import { IProject } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const editResumeSchema = z
  .object({
    title: z.string({ message: "Title must have than 1 character" }),
    description: z.string({ message: "Description must have than 1 character" })
  })
  .required()

export const useEditResumeProjectForm = ({ project }: { project: IProject }) => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof editResumeSchema>>({
    resolver: zodResolver(editResumeSchema),
    defaultValues: {
      title: project.title,
      description: project.description
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof editResumeSchema>) => {
    console.log("@@", values)

    for (const [key, value] of Object.entries(values)) {
      dispatch(updateProjectDetails({ key: key as keyof IProject, value }))
    }
    dispatch(toggleState({ key: "isEditing", content: "projects" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
