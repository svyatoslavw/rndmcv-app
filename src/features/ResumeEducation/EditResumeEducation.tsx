import { useAppSelector } from "@/shared/lib/store"
import { ResumeEducationForm } from "./ResumeEducationForm"
import { useEditResumeEducation } from "./useEditResumeEducation"

const EditResumeEducation = () => {
  const education = useAppSelector((state) => state.resume.education.selected)

  const { form, functions, state } = useEditResumeEducation({ education: education! })

  return (
    <ResumeEducationForm
      heading="Edit Education"
      buttonText="Save"
      type="isEditing"
      form={form}
      functions={functions}
      state={state}
    />
  )
}

export { EditResumeEducation }
