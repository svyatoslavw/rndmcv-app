"use client"

import { ResumeCreateFooter } from "./ResumeCreateFooter"
import { ResumeCreateList } from "./ResumeCreateList"
import { PageDescription, PageHeader, PageTitle } from "@/shared/ui"

const ResumeCreatePage = () => {
  return (
    <main>
      <section className="mx-auto grid w-[1280px] place-content-center gap-28">
        <div className="flex flex-col gap-8">
          <PageHeader>
            <PageTitle>My Resumes</PageTitle>
            <PageDescription>
              Your first resume - 100% free, forever, all features, unlimited downloads, yes really.
            </PageDescription>
          </PageHeader>
          <ResumeCreateList />
          <ResumeCreateFooter />
        </div>
      </section>
    </main>
  )
}

export { ResumeCreatePage }
