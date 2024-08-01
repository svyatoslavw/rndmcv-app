"use client"

import { ResumeExperienceForm } from "./ResumeExperienceForm"
import { useCreateResumeExperience } from "./useCreateResumeExperience"

const CreateResumeExperience = () => {
  const { form, functions, state } = useCreateResumeExperience()

  return (
    <ResumeExperienceForm
      heading="Create Experience"
      buttonText="Create"
      type="isCreating"
      form={form}
      functions={functions}
      state={state}
    />
  )
}

export { CreateResumeExperience }
