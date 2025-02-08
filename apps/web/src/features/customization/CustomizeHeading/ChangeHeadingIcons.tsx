"use client"

import {
  CustomizationSelector,
  selectCustomizationResume,
  useResumeActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import type { HeadingIcon } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"

const HEADING_ICONS: HeadingIcon[] = ["none", "outline", "filled"]

const ChangeHeadingIcons = () => {
  const { icons } = useAppSelector(selectCustomizationResume("heading"))
  const { updateCustomization } = useResumeActions()

  const onChangeIcon = (icons: HeadingIcon) => {
    updateCustomization({ key: "heading", value: { icons } })
  }

  return (
    <CustomizeSectionWrapper heading="Icons">
      <CustomizationSelector
        items={HEADING_ICONS}
        selectedItem={icons}
        onChange={(option) => onChangeIcon(option)}
      />
    </CustomizeSectionWrapper>
  )
}

export { ChangeHeadingIcons }
