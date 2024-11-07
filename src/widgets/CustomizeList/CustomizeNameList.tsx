import { ChangeNameSize, NameBoldToggler } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeNameList = () => {
  return (
    <CustomizeWrapper heading="Name">
      <ChangeNameSize />
      <NameBoldToggler />
    </CustomizeWrapper>
  )
}

export { CustomizeNameList }
