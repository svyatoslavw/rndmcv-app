"use client"

import { ResumeCreateFooter } from "./ResumeCreateFooter"
import { ResumeCreateHeader } from "./ResumeCreateHeader"
import { ResumeCreateList } from "./ResumeCreateList"

const ResumeCreatePage = () => {
  return (
    <main>
      <section className="mx-auto grid w-[1280px] place-content-center gap-28">
        <div className="flex flex-col gap-8">
          <ResumeCreateHeader />
          <ResumeCreateList />
          <ResumeCreateFooter />
        </div>
      </section>
    </main>
  )
}

export { ResumeCreatePage }
