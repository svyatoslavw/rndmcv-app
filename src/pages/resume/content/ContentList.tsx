import {
  ResumeEducationDetails,
  ResumePersonalDetails,
  ResumeProjectDetails
} from "@/entities/resume"
import {
  CreateResumeEducation,
  EditResumeEducation,
  EditResumePerson,
  EditResumeProject
} from "@/features"
import { useAppSelector } from "@/shared/lib/store"

const ContentList = () => {
  const isEditing = useAppSelector((state) => state.content.isEditing)
  const isCreating = useAppSelector((state) => state.content.isCreating)

  if (isEditing === "person") return <EditResumePerson />
  if (isEditing === "projects") return <EditResumeProject />
  if (isEditing === "education") return <EditResumeEducation />

  if (isCreating === "education") return <CreateResumeEducation />

  return (
    <div className="flex flex-col gap-5">
      <ResumePersonalDetails />
      <ResumeProjectDetails />
      <ResumeEducationDetails />
    </div>
  )
}

export { ContentList }
