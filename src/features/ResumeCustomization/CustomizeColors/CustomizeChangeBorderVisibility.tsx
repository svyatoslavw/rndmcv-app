"use client"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, toggleBorderVisibility } from "@/entities/resume"
import type { TypeBorderVisibility } from "@/shared/lib/types"
import { Checkbox, CustomizeSectionWrapper, Label } from "@/shared/ui"

interface CheckboxBorderVisibilityProps {
  label: keyof TypeBorderVisibility
  borderVisibility: TypeBorderVisibility
  onChangeBorderVisibility: (key: keyof TypeBorderVisibility) => void
}

const CheckboxBorderVisibility = ({
  label,
  borderVisibility,
  onChangeBorderVisibility
}: CheckboxBorderVisibilityProps) => {
  return (
    <Label className="flex items-center gap-2">
      <Checkbox
        checked={borderVisibility[label]}
        onCheckedChange={() => onChangeBorderVisibility(label)}
        className="size-5"
      />
      <span className="capitalize">{label}</span>
    </Label>
  )
}

const CustomizeChangeBorderVisibility = () => {
  const dispatch = useAppDispatch()
  const {
    colors: { borderVisibility }
  } = useAppSelector(selectCustomizationResume)

  return (
    <CustomizeSectionWrapper heading="Show border" className="grid grid-cols-2">
      <CheckboxBorderVisibility
        label={"left"}
        borderVisibility={borderVisibility}
        onChangeBorderVisibility={(key) => dispatch(toggleBorderVisibility({ key }))}
      />
      <CheckboxBorderVisibility
        label={"top"}
        borderVisibility={borderVisibility}
        onChangeBorderVisibility={(key) => dispatch(toggleBorderVisibility({ key }))}
      />
      <CheckboxBorderVisibility
        label={"right"}
        borderVisibility={borderVisibility}
        onChangeBorderVisibility={(key) => dispatch(toggleBorderVisibility({ key }))}
      />
      <CheckboxBorderVisibility
        label={"bottom"}
        borderVisibility={borderVisibility}
        onChangeBorderVisibility={(key) => dispatch(toggleBorderVisibility({ key }))}
      />
    </CustomizeSectionWrapper>
  )
}

export { CustomizeChangeBorderVisibility }
