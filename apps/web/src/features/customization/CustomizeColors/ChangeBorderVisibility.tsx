"use client"

import { Checkbox, Label } from "@rndm/ui/components"

import { ResumeDomain, selectCustomizationResume, useCustomizationActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizeSectionWrapper } from "@/shared/ui"

interface CheckboxBorderVisibilityProps {
  label: keyof ResumeDomain.BorderOptions
  borderVisibility: ResumeDomain.BorderOptions
  onChangeBorderVisibility: (key: keyof ResumeDomain.BorderOptions) => void
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

const ChangeBorderVisibility = () => {
  const { borderVisibility } = useAppSelector(selectCustomizationResume("colors"))
  const { toggleBorderVisibility } = useCustomizationActions()

  return (
    <CustomizeSectionWrapper className="grid grid-cols-2" heading="Show border">
      <CheckboxBorderVisibility
        borderVisibility={borderVisibility}
        label={"left"}
        onChangeBorderVisibility={(key) => toggleBorderVisibility({ key })}
      />
      <CheckboxBorderVisibility
        borderVisibility={borderVisibility}
        label={"top"}
        onChangeBorderVisibility={(key) => toggleBorderVisibility({ key })}
      />
      <CheckboxBorderVisibility
        borderVisibility={borderVisibility}
        label={"right"}
        onChangeBorderVisibility={(key) => toggleBorderVisibility({ key })}
      />
      <CheckboxBorderVisibility
        borderVisibility={borderVisibility}
        label={"bottom"}
        onChangeBorderVisibility={(key) => toggleBorderVisibility({ key })}
      />
    </CustomizeSectionWrapper>
  )
}

export { ChangeBorderVisibility }
