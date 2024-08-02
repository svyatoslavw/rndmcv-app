import { ResumeEducationForm } from "./ResumeEducationForm"
import { useCreateResumeEducation } from "./useCreateResumeEducation"

const CreateResumeEducation = () => {
  const { form, functions, state } = useCreateResumeEducation()

  return (
    <ResumeEducationForm
      heading="Create Education"
      buttonText="Create"
      type="isCreating"
      form={form}
      functions={functions}
      state={state}
    />
  )
}

export { CreateResumeEducation }
