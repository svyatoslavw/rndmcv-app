"use client"

import { ResumeExperienceForm } from "./ResumeExperienceForm"
import { useEditResumeExperience } from "./useEditResumeExperience"
import { useAppSelector } from "@/shared/lib/store"

const EditResumeExperience = () => {
  const experience = useAppSelector((state) => state.resume.experience.selected)

  const { form, functions, state } = useEditResumeExperience({ experience: experience! })

  return (
    <ResumeExperienceForm
      heading="Edit Experience"
      buttonText="Save"
      type="isEditing"
      form={form}
      functions={functions}
      state={state}
    />
  )
}

export { EditResumeExperience }
