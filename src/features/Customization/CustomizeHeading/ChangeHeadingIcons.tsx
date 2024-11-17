"use client"

import type { TypeHeadingIcon } from "@/shared/types"

import { useAppDispatch, useAppSelector } from "@/app/store"
import {
  CustomizationSelector,
  selectCustomizationResume,
  updateCustomization
} from "@/entities/resume"
import { CustomizeSectionWrapper } from "@/shared/ui"

const HEADING_ICONS: TypeHeadingIcon[] = ["none", "outline", "filled"]

const ChangeHeadingIcons = () => {
  const dispatch = useAppDispatch()
  const { icons } = useAppSelector(selectCustomizationResume("heading"))

  const onChangeIcon = (icons: TypeHeadingIcon) => {
    dispatch(updateCustomization({ key: "heading", value: { icons } }))
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
