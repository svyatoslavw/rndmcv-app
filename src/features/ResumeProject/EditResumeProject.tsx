import { useAppSelector } from "@/shared/lib/store"
import { ResumeProjectForm } from "./ResumeProjectForm"
import { useEditResumeProjectForm } from "./useEditResumeProjectForm"

const EditResumeProject = () => {
  const project = useAppSelector((state) => state.resume.projects.selected)

  const { form, functions, state } = useEditResumeProjectForm({ project: project! })

  return (
    <ResumeProjectForm
      heading="Edit Project"
      buttonText="Save"
      form={form}
      functions={functions}
      state={state}
    />
  )
}

export { EditResumeProject }
