import { CustomizeNameBold, CustomizeNameSize } from "@/features"
import { CustomizeWrapper } from "@/shared/ui/customize-wrapper"

const CustomizeNameList = () => {
  return (
    <CustomizeWrapper heading="Name">
      <CustomizeNameSize />
      <CustomizeNameBold />
    </CustomizeWrapper>
  )
}

export { CustomizeNameList }
