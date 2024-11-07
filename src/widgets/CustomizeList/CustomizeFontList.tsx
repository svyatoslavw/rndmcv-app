"use client"

import { ChangeFontStyle, SelectFontFamily } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeFontList = () => {
  return (
    <CustomizeWrapper heading="Font">
      <ChangeFontStyle />
      <SelectFontFamily />
    </CustomizeWrapper>
  )
}

export { CustomizeFontList }
