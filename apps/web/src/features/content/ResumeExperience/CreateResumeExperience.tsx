"use client"

import { ResumeForm, useCreateResumeForm } from "@/entities/resume"
import { resumeExperienceSchema } from "@/shared/constants"

const CreateResumeExperience = () => {
  const { form, functions, state } = useCreateResumeForm({
    content: "experience",
    schema: resumeExperienceSchema,
    defaultValues: {
      employer: "",
      job: "",
      city: "",
      country: "",
      startDate: "",
      endDate: "",
      description: ""
    }
  })

  return (
    <ResumeForm<typeof resumeExperienceSchema>
      buttonText="Save"
      content="experience"
      fields={[
        { name: "employer", type: "default", isRequired: true },
        { name: "job", type: "default", isRequired: true },
        { name: "city", type: "default-half", isOptional: true },
        { name: "country", type: "default-half", isOptional: true },
        { name: "startDate", type: "startDate", isRecomended: true },
        { name: "endDate", type: "endDate", isRecomended: true },
        { name: "description", type: "textarea", isOptional: true }
      ]}
      form={form}
      functions={functions}
      heading="Create Experience"
      state={state}
      status="isCreating"
    />
  )
}

export { CreateResumeExperience }
