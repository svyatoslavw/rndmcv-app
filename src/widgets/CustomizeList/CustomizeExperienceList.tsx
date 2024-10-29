import { CustomizeExperienceVisibility } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeExperienceList = () => {
  return (
    <CustomizeWrapper heading="Experience">
      <CustomizeExperienceVisibility />
    </CustomizeWrapper>
  )
}

export { CustomizeExperienceList }
