"use client"

import { ResumeCreateFooter } from "./ResumeCreateFooter"
import { ResumeCreateHeader } from "./ResumeCreateHeader"
import { ResumeCreateList } from "./ResumeCreateList"

import { PageWrapper } from "@/shared/ui"

const ResumeCreatePage = () => {
  return (
    <PageWrapper>
      <ResumeCreateHeader />
      <ResumeCreateList />
      <ResumeCreateFooter />
    </PageWrapper>
  )
}

export { ResumeCreatePage }
