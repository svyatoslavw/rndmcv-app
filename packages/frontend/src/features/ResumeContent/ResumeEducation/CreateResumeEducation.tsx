"use client"

import { ResumeForm, useCreateResumeForm } from "@/entities/resume"
import { resumeEducationSchema } from "@/shared/lib"

const CreateResumeEducation = () => {
  const { form, functions, state } = useCreateResumeForm({
    content: "education",
    schema: resumeEducationSchema,
    defaultValues: {
      school: "",
      degree: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      description: ""
    }
  })

  return (
    <ResumeForm<typeof resumeEducationSchema>
      heading="Create Education"
      content="education"
      status="isCreating"
      buttonText="Save"
      form={form}
      functions={functions}
      state={state}
      fields={[
        { name: "school", type: "default" },
        { name: "degree", type: "default" },
        { name: "city", type: "default-half" },
        { name: "country", type: "default-half" },
        { name: "startDate", type: "startDate" },
        { name: "endDate", type: "endDate" },
        { name: "description", type: "textarea" }
      ]}
    />
  )
}

export { CreateResumeEducation }
