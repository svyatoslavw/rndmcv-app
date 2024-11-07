"use client"

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
    <section className="flex flex-grow flex-col gap-5 overflow-y-auto pb-8">
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
    </section>
  )
}

export { CustomizeList }
