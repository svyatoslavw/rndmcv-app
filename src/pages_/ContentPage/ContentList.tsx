"use client"

import { useAppSelector } from "@/app/store"
import { selectGeneralResume } from "@/entities/resume"
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
import {
  ResumeEducationDetails,
  ResumeExperienceDetails,
  ResumeLanguageDetails,
  ResumePersonDetails,
  ResumeProjectDetails,
  ResumeSkillsDetails
} from "@/widgets"

const ContentList = () => {
  const isEditing = useAppSelector((state) => state.status.isEditing)
  const isCreating = useAppSelector((state) => state.status.isCreating)
  const { visibleBlocks, isNameTyped } = useAppSelector(selectGeneralResume)

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
    <section className="mt-5 flex h-[86vh] flex-col gap-5 overflow-y-scroll pb-5">
      <ResumePersonDetails />
      {visibleBlocks.includes("projects") && <ResumeProjectDetails />}
      {visibleBlocks.includes("education") && <ResumeEducationDetails />}
      {visibleBlocks.includes("experience") && <ResumeExperienceDetails />}
      {visibleBlocks.includes("skills") && <ResumeSkillsDetails />}
      {visibleBlocks.includes("languages") && <ResumeLanguageDetails />}
      <AddSectionToResume />
    </section>
  )
}

export { ContentList }
