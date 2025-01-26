import { Metadata } from "next"
import { redirect } from "next/navigation"

import { prisma } from "@/prisma"

type Params = {
  id: string
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await getResume(params)

  return {
    title: data?.id,
    description: `description about ${data?.id}`
  }
}

export async function generateStaticParams() {
  const resumes = await prisma.resume.findMany({ where: { type: "PUBLIC" } })

  const paths = resumes.map((resume) => {
    return {
      params: { id: resume.id }
    }
  })

  return paths
}

async function getResume(params: Params) {
  const resume = await prisma.resume.findUnique({
    where: { id: params.id, AND: { type: "PUBLIC" } }
  })
  return resume
}

export default async function ResumePage({ params }: { params: Params }) {
  const resume = await getResume(params)
  if (!resume) return redirect("/404")

  return <div>Resume Page {resume.id}</div>
}
