"use client"

import { useAppSelector } from "@/app/store"
import { ResumeForm, selectGeneralResume, useEditResumeForm } from "@/entities/resume"
import { resumeSkillSchema } from "@/shared/lib/constants"

const EditResumeSkills = () => {
  const {
    skills: { selected: skill }
  } = useAppSelector(selectGeneralResume)

  const { form, functions, state } = useEditResumeForm({
    content: "skills",
    schema: resumeSkillSchema,
    defaultValues: {
      skill: skill?.skill || "",
      level: skill?.level || "",
      description: skill?.description || ""
    }
  })

  return (
    <ResumeForm<typeof resumeSkillSchema>
      buttonText="Save"
      content="skills"
      fields={[
        { name: "skill", type: "default" },
        { name: "level", type: "default" },
        { name: "description", type: "textarea" }
      ]}
      form={form}
      functions={functions}
      heading="Edit Skill"
      state={state}
      status="isEditing"
    />
  )
}

export { EditResumeSkills }
