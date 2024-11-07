import { ChangeProjectsVisibility } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeProjectsList = () => {
  return (
    <CustomizeWrapper heading="Projects">
      <ChangeProjectsVisibility />
    </CustomizeWrapper>
  )
}

export { CustomizeProjectsList }
