"use client"

import { ResumeForm, useCreateResumeForm } from "@/entities/resume"
import { resumeSkillSchema } from "@/shared/constants"

const CreateResumeSkills = () => {
  const { form, functions, state } = useCreateResumeForm({
    content: "skills",
    schema: resumeSkillSchema,
    defaultValues: {
      skill: "",
      level: "",
      description: ""
    }
  })

  return (
    <ResumeForm<typeof resumeSkillSchema>
      buttonText="Save"
      content="skills"
      fields={[
        { name: "skill", type: "default", isRequired: true },
        { name: "level", type: "default", isRecomended: true }
      ]}
      form={form}
      functions={functions}
      heading="Create Skill"
      state={state}
      status="isCreating"
    />
  )
}

export { CreateResumeSkills }

