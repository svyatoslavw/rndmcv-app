"use client"

import { ResumeForm, selectGeneralResume, useEditResumeForm } from "@/entities/resume"
import { resumeLanguageSchema } from "@/shared/constants"
import { useAppSelector } from "@/shared/lib/store"

const EditResumeLanguage = () => {
  const { selected: language } = useAppSelector(selectGeneralResume("languages"))

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
        { name: "language", type: "default", isRequired: true },
        { name: "level", type: "default", isRecomended: true }
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

