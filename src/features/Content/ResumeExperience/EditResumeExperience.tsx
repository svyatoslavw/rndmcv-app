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
      heading="Edit Experience"
      state={state}
      status="isEditing"
    />
  )
}

export { EditResumeExperience }
