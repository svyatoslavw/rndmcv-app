"use client"

import { InfoMessage } from "@rndm/ui/components"

import { ResumeEntity } from "@/shared/types"
import { PageDescription, PageHeader, PageTitle, PageWrapper } from "@/shared/ui"
import { ResumeList } from "./ResumeList"

const BuilderPage = ({ resumes }: { resumes: ResumeEntity[] }) => {
  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle content="My Resumes">My Resumes</PageTitle>
        <PageDescription>Create your first resume and share it with the world.</PageDescription>
      </PageHeader>
      <ResumeList resumes={resumes} />
      <div className="mx-auto w-full text-center">
        <InfoMessage text="Enter your personal information, professional summary, work experience, education, and skills in the form fields on the left." />
        <InfoMessage text="As you type, the resume preview on the right updates in real-time, allowing you to see how your resume will look." />
        <InfoMessage text="The layout adjusts to ensure your information is presented in a clean, professional format." />
      </div>
    </PageWrapper>
  )
}

export { BuilderPage }
