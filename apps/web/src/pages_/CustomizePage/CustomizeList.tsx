"use client"

import { InfoMessage } from "@rndm/ui/components"

import {
  CustomizeColorsList,
  CustomizeEducationList,
  CustomizeExperienceList,
  CustomizeFontList,
  CustomizeHeadingList,
  CustomizeJobList,
  CustomizeLanguagesList,
  CustomizeLayoutList,
  CustomizeNameList,
  CustomizeProjectsList,
  CustomizeSkillsList,
  CustomizeSpacingList
} from "@/widgets"

const CustomizeList = () => {
  return (
    <section className="mt-4 flex flex-grow flex-col gap-5 overflow-y-auto pb-16">
      <CustomizeLayoutList />
      <CustomizeColorsList />
      <CustomizeSpacingList />
      <CustomizeHeadingList />
      <CustomizeNameList />
      <CustomizeJobList />
      <CustomizeFontList />
      <CustomizeProjectsList />
      <CustomizeEducationList />
      <CustomizeExperienceList />
      <CustomizeSkillsList />
      <CustomizeLanguagesList />
      <div>
        <InfoMessage text="Project provides in depth stylization of your resume" />
        <InfoMessage text="Autosave is enabled by default. You can change this in the settings" />
      </div>
    </section>
  )
}

export { CustomizeList }
