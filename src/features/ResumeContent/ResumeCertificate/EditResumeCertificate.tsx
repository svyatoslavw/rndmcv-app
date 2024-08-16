"use client"

import { ResumeForm, useEditResumeForm } from "@/entities/resume"
import { resumeCertificateSchema } from "@/shared/lib"
import { useAppSelector } from "@/shared/lib/store"

const EditResumeCertificate = () => {
  const certificate = useAppSelector((state) => state.resume.certificates.selected)

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
