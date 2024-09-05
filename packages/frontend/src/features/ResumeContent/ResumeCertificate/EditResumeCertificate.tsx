"use client"

import { ResumeForm, selectGeneralResume, useEditResumeForm } from "@/entities/resume"
import { resumeCertificateSchema } from "@/shared/lib/constants"
import { useAppSelector } from "@/shared/lib/store"

const EditResumeCertificate = () => {
  const {
    certificates: { selected: certificate }
  } = useAppSelector(selectGeneralResume)

  const { form, functions, state } = useEditResumeForm({
    content: "certificates",
    schema: resumeCertificateSchema,
    defaultValues: {
      certificate: certificate?.certificate || "",
      information: certificate?.information || ""
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

export { EditResumeCertificate }
