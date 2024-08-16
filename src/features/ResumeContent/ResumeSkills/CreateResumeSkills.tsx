"use client"

import { ResumeForm, useCreateResumeForm } from "@/entities/resume"
import { resumeSkillSchema } from "@/shared/lib"

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
      heading="Create Skill"
      content="skills"
      status="isCreating"
      buttonText="Save"
      form={form}
      functions={functions}
      state={state}
      fields={[
        { name: "skill", type: "default" },
        { name: "level", type: "default" },
        { name: "description", type: "textarea" }
      ]}
    />
  )
}

export { CreateResumeSkills }
