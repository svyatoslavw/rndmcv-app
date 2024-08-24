"use client"

import { ResumeForm, useEditResumeForm } from "@/entities/resume"
import { resumeSkillSchema } from "@/shared/lib"
import { useAppSelector } from "@/shared/lib/store"

const EditResumeSkills = () => {
  const skill = useAppSelector((state) => state.resume.skills.selected)

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
      heading="Edit Skill"
      content="skills"
      status="isEditing"
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

export { EditResumeSkills }
