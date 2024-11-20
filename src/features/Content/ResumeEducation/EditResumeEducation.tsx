"use client"

import { useAppSelector } from "@/app/store"
import { ResumeForm, selectGeneralResume, useEditResumeForm } from "@/entities/resume"
import { resumeEducationSchema } from "@/shared/constants"

const EditResumeEducation = () => {
  const {
    education: { selected: education }
  } = useAppSelector(selectGeneralResume)

  const { form, functions, state } = useEditResumeForm({
    content: "education",
    schema: resumeEducationSchema,
    defaultValues: {
      school: education?.school || "",
      degree: education?.degree || "",
      city: education?.city || "",
      country: education?.country || "",
      startDate: education?.startDate || "",
      endDate: education?.endDate || "",
      description: education?.description || ""
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
      heading="Edit Education"
      state={state}
      status="isEditing"
    />
  )
}

export { EditResumeEducation }
