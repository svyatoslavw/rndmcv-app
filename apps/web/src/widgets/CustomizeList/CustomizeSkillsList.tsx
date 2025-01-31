import { ChangeSkillsVisibility, SelectSkillsIcon } from "@/features"
import { SectionWrapper } from "@/shared/ui"

const CustomizeSkillsList = () => {
  return (
    <SectionWrapper heading="Skills">
      <ChangeSkillsVisibility />
      <SelectSkillsIcon />
    </SectionWrapper>
  )
}

export { CustomizeSkillsList }
