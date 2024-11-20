"use client"

import { ResumeForm, useCreateResumeForm } from "@/entities/resume"
import { resumeEducationSchema } from "@/shared/constants"

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
      buttonText="Save"
      content="education"
      fields={[
        { name: "school", type: "default", isRequired: true },
        { name: "degree", type: "default", isOptional: true },
        { name: "city", type: "default-half", isOptional: true },
        { name: "country", type: "default-half", isOptional: true },
        { name: "startDate", type: "startDate", isRecomended: true },
        { name: "endDate", type: "endDate", isRecomended: true },
        { name: "description", type: "textarea", isOptional: true }
      ]}
      form={form}
      functions={functions}
      heading="Create Education"
      state={state}
      status="isCreating"
    />
  )
}

export { CreateResumeEducation }
