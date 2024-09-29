import { CustomizeNameBold, CustomizeNameSize } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeNameList = () => {
  return (
    <CustomizeWrapper heading="Name">
      <CustomizeNameSize />
      <CustomizeNameBold />
    </CustomizeWrapper>
  )
}

export { CustomizeNameList }
