"use client"

import { ResumeForm, useEditResumeForm } from "@/entities/resume"
import { resumeProjectSchema } from "@/shared/lib/constants"
import { useAppSelector } from "@/shared/lib/store"

const EditResumeProject = () => {
  const project = useAppSelector((state) => state.resume.projects.selected)

  const { form, functions, state } = useEditResumeForm({
    content: "projects",
    schema: resumeProjectSchema,
    defaultValues: {
      title: project?.title || "",
      description: project?.description || ""
    }
  })

  return (
    <ResumeForm<typeof resumeProjectSchema>
      heading="Edit Project"
      content="projects"
      status="isEditing"
      buttonText="Save"
      form={form}
      functions={functions}
      state={state}
      fields={[
        { name: "title", type: "default" },
        { name: "description", type: "textarea" }
      ]}
    />
  )
}

export { EditResumeProject }
