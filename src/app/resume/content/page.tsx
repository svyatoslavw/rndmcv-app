import { ResumeDetails, ResumeDoc } from "@/entities/resume"
import { EditResumeDetails } from "@/features/EditResumeDetails/EditResumeDetails"
import { useAppSelector } from "@/shared/lib/store"
import { Button } from "@/shared/ui/button"

export default function ResumeContent() {
  const content = useAppSelector((state) => state.content)

  return (
    <div className="flex w-full gap-8">
      <div className="relative w-1/2 overflow-y-auto overflow-x-hidden scroll-smooth pb-8 pt-8">
        <div className="sticky top-0 z-10 flex items-center justify-between rounded-xl bg-white p-5 shadow-md">
          <h3 className="text-xl font-bold">Resume</h3>
          <Button>Download</Button>
        </div>
        <div className="mt-5">{content.isEditing ? <EditResumeDetails /> : <ResumeDetails />}</div>
      </div>
      <ResumeDoc />
    </div>
  )
}
