import { ChangeSkillsLayout, ChangeSkillsVisibility, SelectSkillsIcon } from "@/features"
import { SectionWrapper } from "@/shared/ui"

const CustomizeSkillsList = () => {
  return (
    <SectionWrapper heading="Skills">
      <ChangeSkillsVisibility />
      <SelectSkillsIcon />
      <ChangeSkillsLayout />
    </SectionWrapper>
  )
}

export { CustomizeSkillsList }
