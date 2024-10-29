import { CustomizeEducationVisibility } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeEducationList = () => {
  return (
    <CustomizeWrapper heading="Education">
      <CustomizeEducationVisibility />
    </CustomizeWrapper>
  )
}

export { CustomizeEducationList }
