import {
  CreateResumeEducation,
  CreateResumeExperience,
  CreateResumeProject,
  EditResumeEducation,
  EditResumeExperience,
  EditResumePerson,
  EditResumeProject
} from "@/features"
import { useAppSelector } from "@/shared/lib/store"
import { ResumeEducationDetails } from "./ResumeEducationDetails"
import { ResumeExperienceDetails } from "./ResumeExperienceDetails"
import { ResumePersonDetails } from "./ResumePersonDetails"
import { ResumeProjectDetails } from "./ResumeProjectDetails"
import { ResumeSkillsDetails } from "./ResumeSkillsDetails"

const ContentList = () => {
  const isEditing = useAppSelector((state) => state.status.isEditing)
  const isCreating = useAppSelector((state) => state.status.isCreating)

  if (isEditing === "person") return <EditResumePerson />
  if (isEditing === "projects") return <EditResumeProject />
  if (isEditing === "education") return <EditResumeEducation />
  if (isEditing === "experience") return <EditResumeExperience />

  if (isCreating === "education") return <CreateResumeEducation />
  if (isCreating === "projects") return <CreateResumeProject />
  if (isCreating === "experience") return <CreateResumeExperience />

  return (
    <div className="flex h-[85vh] flex-col gap-5 overflow-y-scroll pb-5">
      <ResumePersonDetails />
      <ResumeProjectDetails />
      <ResumeEducationDetails />
      <ResumeExperienceDetails />
      <ResumeSkillsDetails />
    </div>
  )
}

export { ContentList }
