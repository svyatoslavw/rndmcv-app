import { Metadata } from "next"
import { redirect } from "next/navigation"

import { prisma, Resume } from "@rndm/database"

type Params = { id: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params
  const data = await getResume(id)

  return {
    title: data?.id,
    description: `description about ${data?.id}`
  }
}

export async function generateStaticParams() {
  const resumes = await prisma.resume.findMany({ where: { type: "PUBLIC" } })

  const paths = resumes.map((resume: Resume) => {
    return {
      params: { id: resume.id }
    }
  })

  return paths
}

async function getResume(id: string) {
  const resume = await prisma.resume.findUnique({
    where: { id, AND: { type: "PUBLIC" } }
  })
  return resume
}

export default async function ResumePage({ params }: { params: Promise<Params> }) {
  const { id } = await params
  const resume = await getResume(id)
  if (!resume) return redirect("/404")

  return <div>Resume Page {resume.id}</div>
}
