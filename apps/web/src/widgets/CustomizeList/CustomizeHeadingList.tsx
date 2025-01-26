import { ChangeHeadingIcons, ChangeHeadingSize, ChangeHeadingStyle } from "@/features"
import { SectionWrapper } from "@/shared/ui"

const CustomizeHeadingList = () => {
  return (
    <SectionWrapper heading="Heading">
      <ChangeHeadingStyle />
      <ChangeHeadingSize />
      <ChangeHeadingIcons />
    </SectionWrapper>
  )
}

export { CustomizeHeadingList }
