"use client"

import { ResumeForm, useCreateResumeForm } from "@/entities/resume"
import { resumeLanguageSchema } from "@/shared/lib/constants"

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
      heading="Create Language"
      content="languages"
      status="isCreating"
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

export { CreateResumeLanguage }
