"use client"

import { ResumeProjectForm } from "./ResumeProjectForm"
import { useCreateResumeProjectForm } from "./useCreateResumeProjectForm"

const CreateResumeProject = () => {
  const { form, functions, state } = useCreateResumeProjectForm()

  return (
    <ResumeProjectForm
      heading="Create Project"
      buttonText="Create"
      type="isCreating"
      form={form}
      functions={functions}
      state={state}
    />
  )
}

export { CreateResumeProject }
