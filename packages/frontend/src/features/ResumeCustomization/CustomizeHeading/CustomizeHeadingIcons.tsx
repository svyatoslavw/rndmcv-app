"use client"

import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { HEADING_ICONS } from "@/shared/lib/constants"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { THeadingIcon } from "@/shared/lib/types"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const CustomizeHeadingIcons = () => {
  const dispatch = useAppDispatch()
  const {
    heading: { icons }
  } = useAppSelector(selectCustomizationResume)

  const onChangeIcon = (icons: THeadingIcon) => {
    dispatch(updateCustomization({ key: "heading", value: { icons } }))
  }
  return (
    <CustomizeSectionWrapper heading="Icons">
      {HEADING_ICONS.map((icon) => (
        <Button
          key={icon}
          variant={icons === icon ? "default" : "outline"}
          onClick={() => onChangeIcon(icon)}
          className="capitalize"
        >
          {icon}
        </Button>
      ))}
    </CustomizeSectionWrapper>
  )
}

export { CustomizeHeadingIcons }
