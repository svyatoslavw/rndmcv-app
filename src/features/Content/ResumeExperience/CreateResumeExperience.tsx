"use client"

import { ResumeForm, useCreateResumeForm } from "@/entities/resume"
import { resumeExperienceSchema } from "@/shared/lib/constants"

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
        { name: "employer", type: "default" },
        { name: "job", type: "default" },
        { name: "city", type: "default-half" },
        { name: "country", type: "default-half" },
        { name: "startDate", type: "startDate" },
        { name: "endDate", type: "endDate" },
        { name: "description", type: "textarea" }
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
