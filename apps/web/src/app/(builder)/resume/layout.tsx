import { AutosaveResume } from "@/features"
import { ResumeDocumentWrapper, ResumeHeader, ResumeSidebar, Toolbar } from "@/widgets"
import { ResumeProvider } from "./resume-provider"

export default function ResumeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ResumeProvider>
      <AutosaveResume />
      <div className="relative flex h-screen w-full bg-[#f1f1f1] dark:bg-black">
        <ResumeSidebar />
        <div className="flex h-screen w-full flex-col overflow-hidden">
          <ResumeHeader />
          <div className="flex h-full">
            <div className="relative flex h-full w-full flex-grow flex-col overflow-hidden sm:max-w-full md:max-w-full lg:max-w-[400px] xl:max-w-[400px] 2xl:max-w-[540px]">
              <div className="min-h-0 flex-grow overflow-y-auto scroll-smooth p-4 pt-0">
                {children}
              </div>
            </div>
            <Toolbar />
            <div className="mx-auto flex flex-1 justify-center">
              <ResumeDocumentWrapper />
            </div>
          </div>
        </div>
      </div>
    </ResumeProvider>
  )
}
