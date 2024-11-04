"use client"

import type { TypeBorderVisibility } from "@/shared/lib/types"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, toggleBorderVisibility } from "@/entities/resume"
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
        className="size-5"
        onCheckedChange={() => onChangeBorderVisibility(label)}
      />
      <span className="capitalize">{label}</span>
    </Label>
  )
}

const CustomizeChangeBorderVisibility = () => {
  const dispatch = useAppDispatch()
  const { borderVisibility } = useAppSelector(selectCustomizationResume("colors"))

  return (
    <CustomizeSectionWrapper className="grid grid-cols-2" heading="Show border">
      <CheckboxBorderVisibility
        borderVisibility={borderVisibility}
        label={"left"}
        onChangeBorderVisibility={(key) => dispatch(toggleBorderVisibility({ key }))}
      />
      <CheckboxBorderVisibility
        borderVisibility={borderVisibility}
        label={"top"}
        onChangeBorderVisibility={(key) => dispatch(toggleBorderVisibility({ key }))}
      />
      <CheckboxBorderVisibility
        borderVisibility={borderVisibility}
        label={"right"}
        onChangeBorderVisibility={(key) => dispatch(toggleBorderVisibility({ key }))}
      />
      <CheckboxBorderVisibility
        borderVisibility={borderVisibility}
        label={"bottom"}
        onChangeBorderVisibility={(key) => dispatch(toggleBorderVisibility({ key }))}
      />
    </CustomizeSectionWrapper>
  )
}

export { CustomizeChangeBorderVisibility }
