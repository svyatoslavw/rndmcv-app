import { ResumeEducationDetails } from "./ResumeEducationDetails"
import { ResumeExperienceDetails } from "./ResumeExperienceDetails"
import { ResumePersonDetails } from "./ResumePersonDetails"
import { ResumeProjectDetails } from "./ResumeProjectDetails"
import { ResumeSkillsDetails } from "./ResumeSkillsDetails"
import {
  CreateResumeEducation,
  CreateResumeExperience,
  CreateResumeProject,
  CreateResumeSkills,
  EditResumeEducation,
  EditResumeExperience,
  EditResumePerson,
  EditResumeProject,
  EditResumeSkills
} from "@/features"
import { useAppSelector } from "@/shared/lib/store"
import { Button } from "@/shared/ui"
import { ArrowIcon } from "@/shared/ui/icons/ArrowIcon"

const ContentList = () => {
  const isEditing = useAppSelector((state) => state.status.isEditing)
  const isCreating = useAppSelector((state) => state.status.isCreating)
  const isFirstLoading = useAppSelector((state) => state.resume.isFirstLoading)

  if (isEditing === "person") return <EditResumePerson />
  if (isEditing === "projects") return <EditResumeProject />
  if (isEditing === "education") return <EditResumeEducation />
  if (isEditing === "experience") return <EditResumeExperience />
  if (isEditing === "skills") return <EditResumeSkills />

  if (isCreating === "education") return <CreateResumeEducation />
  if (isCreating === "projects") return <CreateResumeProject />
  if (isCreating === "experience") return <CreateResumeExperience />
  if (isCreating === "skills") return <CreateResumeSkills />

  return (
    <div className="flex h-[86vh] flex-col gap-5 overflow-y-scroll pb-5">
      <ResumePersonDetails />

      {isFirstLoading ? (
        <div className="mx-auto">
          <ArrowIcon className="mx-auto rotate-90" width={100} height={100} />
          <Button size={"lg"}>Add content</Button>
        </div>
      ) : (
        <>
          <ResumeProjectDetails />
          <ResumeEducationDetails />
          <ResumeExperienceDetails />
          <ResumeSkillsDetails />
        </>
      )}
    </div>
  )
}

export { ContentList }
