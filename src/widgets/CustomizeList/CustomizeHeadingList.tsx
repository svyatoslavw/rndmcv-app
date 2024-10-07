import { CustomizeHeadingIcons, CustomizeHeadingSize, CustomizeHeadingStyle } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeHeadingList = () => {
  return (
    <CustomizeWrapper heading="Heading">
      <CustomizeHeadingStyle />
      <CustomizeHeadingSize />
      <CustomizeHeadingIcons />
    </CustomizeWrapper>
  )
}

export { CustomizeHeadingList }
