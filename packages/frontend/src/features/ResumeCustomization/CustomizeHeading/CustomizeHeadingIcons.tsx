"use client"

import { THeadingIcon, updateCustomization } from "@/entities/resume"
import { HEADING_ICONS } from "@/shared/lib"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const CustomizeHeadingIcons = () => {
  const dispatch = useAppDispatch()
  const icons = useAppSelector((state) => state.customization.heading.icons)

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
