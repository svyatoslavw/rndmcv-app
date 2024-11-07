"use client"

import { useAppSelector } from "@/app/store"
import { ResumeForm, selectGeneralResume, useEditResumeForm } from "@/entities/resume"
import { resumeExperienceSchema } from "@/shared/constants"

const EditResumeExperience = () => {
  const {
    experience: { selected: experience }
  } = useAppSelector(selectGeneralResume)

  const { form, functions, state } = useEditResumeForm({
    content: "experience",
    schema: resumeExperienceSchema,
    defaultValues: {
      employer: experience?.employer || "",
      job: experience?.job || "",
      city: experience?.city || "",
      country: experience?.country || "",
      startDate: experience?.startDate || "",
      endDate: experience?.endDate || "",
      description: experience?.description || ""
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
      heading="Edit Experience"
      state={state}
      status="isEditing"
    />
  )
}

export { EditResumeExperience }
