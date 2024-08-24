"use client"

import { ResumeForm, useCreateResumeForm } from "@/entities/resume"
import { resumeCertificateSchema } from "@/shared/lib"

const CreateResumeCertificate = () => {
  const { form, functions, state } = useCreateResumeForm({
    content: "certificates",
    schema: resumeCertificateSchema,
    defaultValues: {
      certificate: "",
      information: ""
    }
  })

  return (
    <ResumeForm<typeof resumeCertificateSchema>
      heading="Create Certificate"
      content="certificates"
      status="isCreating"
      buttonText="Save"
      form={form}
      functions={functions}
      state={state}
      fields={[
        { name: "certificate", type: "default" },
        { name: "information", type: "textarea" }
      ]}
    />
  )
}

export { CreateResumeCertificate }
