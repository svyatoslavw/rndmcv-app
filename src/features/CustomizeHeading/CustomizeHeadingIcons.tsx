"use client"

import { THeadingIcon, updateCustomization } from "@/entities/resume"
import { HEADING_ICONS } from "@/shared/lib"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Button } from "@/shared/ui"

const CustomizeHeadingIcons = () => {
  const dispatch = useAppDispatch()
  const icons = useAppSelector((state) => state.customization.heading.icons)

  const onChangeIcon = (icons: THeadingIcon) => {
    dispatch(updateCustomization({ key: "heading", value: { icons } }))
  }
  return (
    <div>
      <h3 className="mb-2 font-semibold">Icons</h3>
      <div className="flex flex-wrap gap-2">
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
      </div>
    </div>
  )
}

export { CustomizeHeadingIcons }
