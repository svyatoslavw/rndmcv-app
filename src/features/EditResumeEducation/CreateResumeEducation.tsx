import { ResumeEducationForm } from "./ResumeEducationForm"
import { useCreateResumeEducation } from "./useCreateResumeEducation"

const CreateResumeEducation = () => {
  const { form, functions, state } = useCreateResumeEducation()

  return (
    <ResumeEducationForm
      heading="Create Education"
      buttonText="Create"
      form={form}
      functions={functions}
      state={state}
    />
  )
}

export { CreateResumeEducation }
