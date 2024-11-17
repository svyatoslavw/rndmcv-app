"use client"

import { ChangeSpacing } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeSpacingList = () => {
  return (
    <CustomizeWrapper heading="Spacing">
      <ChangeSpacing />
    </CustomizeWrapper>
  )
}

export { CustomizeSpacingList }
