"use client"

import { ResumeForm, selectGeneralResume, useEditResumeForm } from "@/entities/resume"
import { resumeSkillSchema } from "@/shared/constants"
import { useAppSelector } from "@/shared/lib/store"

const EditResumeSkills = () => {
  const { selected: skill } = useAppSelector(selectGeneralResume("skills"))

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
        { name: "skill", type: "default", isRequired: true },
        { name: "level", type: "default", isRecomended: true }
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

