"use client"

import { ChangeSpacing } from "@/features"
import { SectionWrapper } from "@/shared/ui"

const CustomizeSpacingList = () => {
  return (
    <SectionWrapper heading="Spacing">
      <ChangeSpacing />
    </SectionWrapper>
  )
}

export { CustomizeSpacingList }
