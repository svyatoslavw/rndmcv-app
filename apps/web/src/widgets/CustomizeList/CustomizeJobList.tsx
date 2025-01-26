import { ChangeJobSize, JobItalicToggler } from "@/features"
import { SectionWrapper } from "@/shared/ui"

const CustomizeJobList = () => {
  return (
    <SectionWrapper heading="Job title">
      <ChangeJobSize />
      <JobItalicToggler />
    </SectionWrapper>
  )
}

export { CustomizeJobList }
