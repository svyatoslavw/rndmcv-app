import { ChangeSkillsVisibility, SelectSkillsIcon } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeSkillsList = () => {
  return (
    <CustomizeWrapper heading="Skills">
      <ChangeSkillsVisibility />
      <SelectSkillsIcon />
    </CustomizeWrapper>
  )
}

export { CustomizeSkillsList }
