import { ResumeProvider } from "./resume-provider"

import { AutosaveResume } from "@/features"
import { ResumeDocumentWrapper, ResumeSidebar, Toolbar } from "@/widgets"

export default function ResumeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ResumeProvider>
      <AutosaveResume />
      <div className="relative mx-auto flex h-full w-full justify-center gap-8 bg-zinc-100 px-4 dark:bg-black sm:px-6 md:px-6 lg:px-8 xl:px-8 2xl:px-10">
        <ResumeSidebar />
        <div className="flex w-full gap-8 sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px]">
          <div className="relative w-full overflow-hidden scroll-smooth pt-8 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            {children}
          </div>
          <Toolbar />
          <ResumeDocumentWrapper />
        </div>
      </div>
    </ResumeProvider>
  )
}
