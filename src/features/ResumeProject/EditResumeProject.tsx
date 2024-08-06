"use client"

import { ResumeProjectForm } from "./ResumeProjectForm"
import { useEditResumeProjectForm } from "./useEditResumeProjectForm"
import { useAppSelector } from "@/shared/lib/store"

const EditResumeProject = () => {
  const project = useAppSelector((state) => state.resume.projects.selected)

  const { form, functions, state } = useEditResumeProjectForm({ project: project! })

  return (
    <ResumeProjectForm
      heading="Edit Project"
      buttonText="Save"
      type="isEditing"
      form={form}
      functions={functions}
      state={state}
    />
  )
}

export { EditResumeProject }
