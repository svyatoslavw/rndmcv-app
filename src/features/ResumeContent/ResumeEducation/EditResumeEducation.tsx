"use client"

import { useAppSelector } from "@/app/store"
import { ResumeForm, selectGeneralResume, useEditResumeForm } from "@/entities/resume"
import { resumeEducationSchema } from "@/shared/lib/constants"

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
        { name: "school", type: "default" },
        { name: "degree", type: "default" },
        { name: "city", type: "default-half" },
        { name: "country", type: "default-half" },
        { name: "startDate", type: "startDate" },
        { name: "endDate", type: "endDate" },
        { name: "description", type: "textarea" }
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
