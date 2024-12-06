"use client"

import { ChangeFontStyle, SelectFontFamily } from "@/features"
import { SectionWrapper } from "@/shared/ui"

const CustomizeFontList = () => {
  return (
    <SectionWrapper heading="Font">
      <ChangeFontStyle />
      <SelectFontFamily />
    </SectionWrapper>
  )
}

export { CustomizeFontList }
