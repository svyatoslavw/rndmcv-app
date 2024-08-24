"use client"

import {
  ResumeEducationDetails,
  ResumeExperienceDetails,
  ResumeLanguageDetails,
  ResumePersonDetails,
  ResumeProjectDetails,
  ResumeSkillsDetails
} from "./components"
import {
  AddResumeName,
  AddSectionToResume,
  CreateResumeEducation,
  CreateResumeExperience,
  CreateResumeLanguage,
  CreateResumeProject,
  CreateResumeSkills,
  EditResumeEducation,
  EditResumeExperience,
  EditResumeLanguage,
  EditResumePerson,
  EditResumeProject,
  EditResumeSkills
} from "@/features"
import { useAppSelector } from "@/shared/lib/store"

const ContentList = () => {
  const isEditing = useAppSelector((state) => state.status.isEditing)
  const isCreating = useAppSelector((state) => state.status.isCreating)
  const isNameTyped = useAppSelector((state) => state.resume.isNameTyped)
  const visibleBlocks = useAppSelector((state) => state.resume.visibleBlocks)

  if (isEditing === "person") return <EditResumePerson />
  if (isEditing === "projects") return <EditResumeProject />
  if (isEditing === "education") return <EditResumeEducation />
  if (isEditing === "experience") return <EditResumeExperience />
  if (isEditing === "skills") return <EditResumeSkills />
  if (isEditing === "languages") return <EditResumeLanguage />

  if (isCreating === "education") return <CreateResumeEducation />
  if (isCreating === "projects") return <CreateResumeProject />
  if (isCreating === "experience") return <CreateResumeExperience />
  if (isCreating === "skills") return <CreateResumeSkills />
  if (isCreating === "languages") return <CreateResumeLanguage />

  if (isNameTyped) return <AddResumeName />

  return (
    <div className="flex h-[86vh] flex-col gap-5 overflow-y-scroll pb-5">
      <ResumePersonDetails />
      {visibleBlocks.includes("projects") && <ResumeProjectDetails />}
      {visibleBlocks.includes("education") && <ResumeEducationDetails />}
      {visibleBlocks.includes("experience") && <ResumeExperienceDetails />}
      {visibleBlocks.includes("skills") && <ResumeSkillsDetails />}
      {visibleBlocks.includes("languages") && <ResumeLanguageDetails />}
      <AddSectionToResume />
    </div>
  )
}

export { ContentList }
