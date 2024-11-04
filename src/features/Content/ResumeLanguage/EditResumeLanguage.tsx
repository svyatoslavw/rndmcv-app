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
      buttonText="Save"
      content="languages"
      fields={[
        { name: "language", type: "default" },
        { name: "level", type: "default" },
        { name: "description", type: "textarea" }
      ]}
      form={form}
      functions={functions}
      heading="Edit Language"
      state={state}
      status="isEditing"
    />
  )
}

export { EditResumeLanguage }
