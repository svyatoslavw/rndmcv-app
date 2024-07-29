import { useAppSelector } from "@/shared/lib/store"
import { ResumeExperienceForm } from "./ResumeExperienceForm"
import { useEditResumeExperience } from "./useEditResumeExperience"

const EditResumeExperience = () => {
  const experience = useAppSelector((state) => state.resume.experience.selected)

  const { form, functions, state } = useEditResumeExperience({ experience: experience! })

  return (
    <ResumeExperienceForm
      heading="Edit Experience"
      buttonText="Save"
      form={form}
      functions={functions}
      state={state}
    />
  )
}

export { EditResumeExperience }
