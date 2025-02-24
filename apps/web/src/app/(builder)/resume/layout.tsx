import { AutosaveResume } from "@/features"
import { ResumeDocumentWrapper, ResumeSidebar, Toolbar } from "@/widgets"
import { ResumeProvider } from "./resume-provider"

export default function ResumeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ResumeProvider>
      <AutosaveResume />
      <div className="relative mx-auto flex h-full w-full justify-center gap-8 bg-[#f1f1f1] sm:px-6 md:px-6 lg:px-8 xl:px-8 2xl:px-10 dark:bg-black">
        <ResumeSidebar />
        <div className="flex w-full gap-8 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1300px]">
          <div className="relative w-2/3 flex-grow overflow-hidden scroll-smooth pt-8 xl:w-1/2">
            {children}
          </div>
          <Toolbar />
          <ResumeDocumentWrapper />
        </div>
      </div>
    </ResumeProvider>
  )
}
