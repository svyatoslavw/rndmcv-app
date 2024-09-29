"use client"

import { useAppSelector } from "@/app/store"
import { ResumeForm, selectGeneralResume, useEditResumeForm } from "@/entities/resume"
import { resumeLanguageSchema } from "@/shared/lib/constants"

const EditResumeLanguage = () => {
  const {
    languages: { selected: language }
  } = useAppSelector(selectGeneralResume)

  const { form, functions, state } = useEditResumeForm({
    content: "languages",
    schema: resumeLanguageSchema,
    defaultValues: {
      language: language?.language || "",
      level: language?.level || "",
      description: language?.description || ""
    }
  })

  return (
    <ResumeForm<typeof resumeLanguageSchema>
      heading="Edit Language"
      content="languages"
      status="isEditing"
      buttonText="Save"
      form={form}
      functions={functions}
      state={state}
      fields={[
        { name: "language", type: "default" },
        { name: "level", type: "default" },
        { name: "description", type: "textarea" }
      ]}
    />
  )
}

export { EditResumeLanguage }
