import { ChangeHeadingIcons, ChangeHeadingSize, ChangeHeadingStyle } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeHeadingList = () => {
  return (
    <CustomizeWrapper heading="Heading">
      <ChangeHeadingStyle />
      <ChangeHeadingSize />
      <ChangeHeadingIcons />
    </CustomizeWrapper>
  )
}

export { CustomizeHeadingList }
