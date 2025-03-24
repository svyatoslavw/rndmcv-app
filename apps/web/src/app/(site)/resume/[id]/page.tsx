import { Metadata } from "next"
import { redirect } from "next/navigation"

import { ResumeSlugPage } from "@/pages_"
import { getPublicResumes, getResumeById } from "@/shared/lib/actions"
import { Resume } from "@rndm/database"

type Params = { id: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params
  const data = await getResumeById(id)

  return {
    title: data?.id,
    description: `description about ${data?.id}`
  }
}

export async function generateStaticParams() {
  const resumes = await getPublicResumes()

  const paths = resumes.map((resume: Resume) => {
    return {
      params: { id: resume.id }
    }
  })

  return paths
}

export default async function ResumePage({ params }: { params: Promise<Params> }) {
  const { id } = await params
  const resume = await getResumeById(id)
  if (!resume) return redirect("/404")

  return (
    <ResumeSlugPage
      resume={{
        ...resume,
        general: JSON.parse(resume.general),
        customization: JSON.parse(resume.customization)
      }}
    />
  )
}
