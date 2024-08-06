"use client"

import { ResumeSkillsForm } from "./ResumeSkillsForm"
import { useCreateResumeSkills } from "./useCreateResumeSkills"

const CreateResumeSkills = () => {
  const { form, functions, state } = useCreateResumeSkills()

  return (
    <ResumeSkillsForm
      heading="Create Skill"
      buttonText="Create"
      type="isCreating"
      form={form}
      functions={functions}
      state={state}
    />
  )
}

export { CreateResumeSkills }
