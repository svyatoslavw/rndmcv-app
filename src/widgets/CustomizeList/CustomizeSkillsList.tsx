import { CustomizeSkillsIcon, CustomizeSkillsVisibility } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeSkillsList = () => {
  return (
    <CustomizeWrapper heading="Skills">
      <CustomizeSkillsVisibility />
      <CustomizeSkillsIcon />
    </CustomizeWrapper>
  )
}

export { CustomizeSkillsList }
