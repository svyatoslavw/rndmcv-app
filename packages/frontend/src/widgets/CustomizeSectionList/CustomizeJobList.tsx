import { CustomizeJobItalic, CustomizeJobSize } from "@/features"
import { CustomizeWrapper } from "@/shared/ui/customize-wrapper"

const CustomizeJobList = () => {
  return (
    <CustomizeWrapper heading="Job title">
      <CustomizeJobSize />
      <CustomizeJobItalic />
    </CustomizeWrapper>
  )
}

export { CustomizeJobList }
