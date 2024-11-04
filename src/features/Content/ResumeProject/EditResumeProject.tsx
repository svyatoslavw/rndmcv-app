"use client"

import { useAppSelector } from "@/app/store"
import { ResumeForm, selectGeneralResume, useEditResumeForm } from "@/entities/resume"
import { resumeProjectSchema } from "@/shared/lib/constants"

const EditResumeProject = () => {
  const {
    projects: { selected: project }
  } = useAppSelector(selectGeneralResume)

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
      buttonText="Save"
      content="projects"
      fields={[
        { name: "title", type: "default" },
        { name: "description", type: "textarea" }
      ]}
      form={form}
      functions={functions}
      heading="Edit Project"
      state={state}
      status="isEditing"
    />
  )
}

export { EditResumeProject }
