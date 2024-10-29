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
    <section className="flex h-[86vh] flex-col gap-5 overflow-y-scroll pb-5">
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
