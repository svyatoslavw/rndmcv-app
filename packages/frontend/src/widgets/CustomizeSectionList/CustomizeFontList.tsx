"use client"

import { CustomizeFont, CustomizeFontStyle } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeFontList = () => {
  return (
    <CustomizeWrapper heading="Font">
      <CustomizeFontStyle />
      <CustomizeFont />
    </CustomizeWrapper>
  )
}

export { CustomizeFontList }
