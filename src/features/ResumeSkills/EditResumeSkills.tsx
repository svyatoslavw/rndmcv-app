import { ResumeSkillsForm } from "./ResumeSkillsForm"
import { useEditResumeEducation } from "./useEditResumeSkills"
import { useAppSelector } from "@/shared/lib/store"

const EditResumeSkills = () => {
  const skills = useAppSelector((state) => state.resume.skills.selected)

  const { form, functions, state } = useEditResumeEducation({ skills: skills! })

  return (
    <ResumeSkillsForm
      heading="Edit Skill"
      buttonText="Save"
      type="isEditing"
      form={form}
      functions={functions}
      state={state}
    />
  )
}

export { EditResumeSkills }
