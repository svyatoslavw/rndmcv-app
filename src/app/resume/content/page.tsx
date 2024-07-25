import { ResumeDoc, ResumePersonalDetails } from "@/entities/resume"
import { ResumeProjectsDetails } from "@/entities/resume/ui/ResumeProjectsDetails"
import { EditResumePersonalDetails } from "@/features"
import { useAppSelector } from "@/shared/lib/store"
import { Button } from "@/shared/ui/button"

export default function ResumeContent() {
  const content = useAppSelector((state) => state.content.person)

  return (
    <div className="flex w-full gap-8">
      <div className="relative w-1/2 overflow-y-auto overflow-x-hidden scroll-smooth pb-8 pt-8">
        <div className="sticky top-0 z-10 flex items-center justify-between rounded-xl bg-white p-5 shadow-md">
          <h3 className="text-xl font-bold">Resume</h3>
          <Button>Download</Button>
        </div>
        <div className="flex flex-col gap-5">
          {content.isEditing ? <EditResumePersonalDetails /> : <ResumePersonalDetails />}
          <ResumeProjectsDetails />
        </div>
      </div>
      <ResumeDoc />
    </div>
  )
}
