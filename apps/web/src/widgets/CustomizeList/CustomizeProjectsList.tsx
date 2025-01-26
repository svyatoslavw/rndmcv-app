import { ChangeProjectsVisibility } from "@/features"
import { SectionWrapper } from "@/shared/ui"

const CustomizeProjectsList = () => {
  return (
    <SectionWrapper heading="Projects">
      <ChangeProjectsVisibility />
    </SectionWrapper>
  )
}

export { CustomizeProjectsList }
