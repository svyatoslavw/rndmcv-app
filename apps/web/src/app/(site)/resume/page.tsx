import { Metadata } from "next"

import { BuilderPage } from "@/pages_"
import { getResumesByUserId } from "@/shared/lib/actions"

export const metadata: Metadata = {
  title: "Create Resume"
}

export default async function ResumeCreate() {
  const resumes = await getResumesByUserId()

  return (
    <BuilderPage
      resumes={resumes.data.map((resume) => ({
        ...resume,
        general: JSON.parse(resume.general),
        customization: JSON.parse(resume.customization)
      }))}
    />
  )
}
