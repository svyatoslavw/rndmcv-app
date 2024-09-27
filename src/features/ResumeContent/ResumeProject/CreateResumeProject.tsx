"use client"

import { ResumeForm, useCreateResumeForm } from "@/entities/resume"
import { resumeProjectSchema } from "@/shared/lib/constants"

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
      heading="Create Project"
      content="projects"
      status="isCreating"
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

export { CreateResumeProject }
