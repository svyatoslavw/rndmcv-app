import { ChangeNameSize, NameBoldToggler } from "@/features"
import { SectionWrapper } from "@/shared/ui"

const CustomizeNameList = () => {
  return (
    <SectionWrapper heading="Name">
      <ChangeNameSize />
      <NameBoldToggler />
    </SectionWrapper>
  )
}

export { CustomizeNameList }
