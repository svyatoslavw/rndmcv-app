"use client"

import { ResumeForm, useCreateResumeForm } from "@/entities/resume"
import { resumeProjectSchema } from "@/shared/constants"

const CreateResumeProject = () => {
  const { form, functions, state } = useCreateResumeForm({
    content: "projects",
    schema: resumeProjectSchema,
    defaultValues: {
      title: "",
      description: ""
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
      heading="Create Project"
      state={state}
      status="isCreating"
    />
  )
}

export { CreateResumeProject }
