import { ChangeJobSize, JobItalicToggler } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeJobList = () => {
  return (
    <CustomizeWrapper heading="Job title">
      <ChangeJobSize />
      <JobItalicToggler />
    </CustomizeWrapper>
  )
}

export { CustomizeJobList }
