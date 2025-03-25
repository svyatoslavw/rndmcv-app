"use client"

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
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import {
  ResumeEducationDetails,
  ResumeExperienceDetails,
  ResumeLanguageDetails,
  ResumePersonDetails,
  ResumeProjectDetails,
  ResumeSkillsDetails
} from "@/widgets"
import { Just_Another_Hand } from "next/font/google"

const font = Just_Another_Hand({ weight: "400", subsets: ["latin"], fallback: ["sans-serif"] })

const ContentList = () => {
  const isEditing = useAppSelector((state) => state.status.isEditing)
  const isCreating = useAppSelector((state) => state.status.isCreating)
  const visibleBlocks = useAppSelector(selectGeneralResume("visibleBlocks"))
  const isFirstLoading = useAppSelector(selectGeneralResume("isFirstLoading"))
  const isNameTyped = useAppSelector(selectGeneralResume("isNameTyped"))

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
    <section className="flex flex-grow flex-col gap-5 overflow-y-auto pb-8 pt-5">
      <ResumePersonDetails />
      {visibleBlocks.includes("projects") && <ResumeProjectDetails />}
      {visibleBlocks.includes("education") && <ResumeEducationDetails />}
      {visibleBlocks.includes("experience") && <ResumeExperienceDetails />}
      {visibleBlocks.includes("skills") && <ResumeSkillsDetails />}
      {visibleBlocks.includes("languages") && <ResumeLanguageDetails />}
      <div className="mx-auto w-full text-center">
        {isFirstLoading && (
          <h3 className={cn("mb-3 text-7xl font-medium", font.className)}>
            Well done! :) Add some content here
          </h3>
        )}
        <div className="flex items-center justify-center gap-4">
          <AddSectionToResume />
        </div>
      </div>
    </section>
  )
}

export { ContentList }
