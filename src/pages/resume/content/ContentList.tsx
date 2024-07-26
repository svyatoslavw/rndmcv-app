import { ResumePersonalDetails, ResumeProjectDetails } from "@/entities/resume"
import { EditResumePersonalDetails, EditResumeProjectDetails } from "@/features"
import { useAppSelector } from "@/shared/lib/store"

const ContentList = () => {
  const isEditing = useAppSelector((state) => state.content.isEditing)

  if (isEditing === "person") return <EditResumePersonalDetails />
  if (isEditing === "projects") return <EditResumeProjectDetails />

  return (
    <div className="flex flex-col gap-5">
      <ResumePersonalDetails />
      <ResumeProjectDetails />
    </div>
  )
}

export { ContentList }
