"use client"

import type { TypeHeadingIcon } from "@/shared/types"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const HEADING_ICONS: TypeHeadingIcon[] = ["none", "outline", "filled"]

const ChangeHeadingIcons = () => {
  const dispatch = useAppDispatch()
  const { icons } = useAppSelector(selectCustomizationResume("heading"))

  const onChangeIcon = (icons: TypeHeadingIcon) => {
    dispatch(updateCustomization({ key: "heading", value: { icons } }))
  }

  return (
    <CustomizeSectionWrapper heading="Icons">
      {HEADING_ICONS.map((icon) => (
        <Button
          key={icon}
          className="capitalize"
          variant={icons === icon ? "default" : "outline"}
          onClick={() => onChangeIcon(icon)}
        >
          {icon}
        </Button>
      ))}
    </CustomizeSectionWrapper>
  )
}

export { ChangeHeadingIcons }
