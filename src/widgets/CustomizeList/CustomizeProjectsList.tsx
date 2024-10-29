import { CustomizeProjectsVisibility } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeProjectsList = () => {
  return (
    <CustomizeWrapper heading="Projects">
      <CustomizeProjectsVisibility />
    </CustomizeWrapper>
  )
}

export { CustomizeProjectsList }
