"use client"

import { ResumeForm, useCreateResumeForm } from "@/entities/resume"
import { resumeLanguageSchema } from "@/shared/constants"

const CreateResumeLanguage = () => {
  const { form, functions, state } = useCreateResumeForm({
    content: "languages",
    schema: resumeLanguageSchema,
    defaultValues: {
      language: "",
      level: "",
      description: ""
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
      heading="Create Language"
      state={state}
      status="isCreating"
    />
  )
}

export { CreateResumeLanguage }

