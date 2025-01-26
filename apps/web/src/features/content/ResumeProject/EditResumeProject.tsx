"use client"

import { ResumeForm, selectGeneralResume, useEditResumeForm } from "@/entities/resume"
import { resumeProjectSchema } from "@/shared/constants"
import { useAppSelector } from "@/shared/lib/store"

const EditResumeProject = () => {
  const { selected: project } = useAppSelector(selectGeneralResume("projects"))

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
        { name: "title", type: "default", isRequired: true },
        { name: "description", type: "textarea", isRecomended: true }
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
