"use client"

import { Checkbox, Label } from "@rndm/ui/components"

import { ResumeDomain, selectCustomizationResume, useCustomizationActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizeSectionWrapper } from "@/shared/ui"

interface CheckboxApplyAccentColorProps {
  label: keyof ResumeDomain.AccentOptions
  isAccent: ResumeDomain.AccentOptions
  onChangeAccentVisibility: (key: keyof ResumeDomain.AccentOptions) => void
}

const SelectAccentColor = ({
  label,
  isAccent,
  onChangeAccentVisibility
}: CheckboxApplyAccentColorProps) => {
  return (
    <Label className="flex items-center gap-2">
      <Checkbox
        checked={isAccent[label]}
        className="size-5"
        onCheckedChange={() => onChangeAccentVisibility(label)}
      />
      <span className="capitalize">{label.replace(/([A-Z])/g, " $1").toLowerCase()}</span>
    </Label>
  )
}

const AccentColorOptions = () => {
  const { isAccent } = useAppSelector(selectCustomizationResume("colors"))
  const { toggleAccentVisibility } = useCustomizationActions()

  const onChangeAccentVisibility = (key: keyof ResumeDomain.AccentOptions) => {
    toggleAccentVisibility({ key })
  }

  return (
    <CustomizeSectionWrapper className="grid grid-cols-2" heading="Apply accent color">
      <SelectAccentColor
        isAccent={isAccent}
        label="name"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />
      <SelectAccentColor
        isAccent={isAccent}
        label="headingsLines"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />
      <SelectAccentColor
        isAccent={isAccent}
        label="headings"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />

      <SelectAccentColor
        isAccent={isAccent}
        label="headerIcons"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />

      <SelectAccentColor
        isAccent={isAccent}
        label="dates"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />
      <SelectAccentColor
        isAccent={isAccent}
        label="linkIcons"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />
      <SelectAccentColor
        isAccent={isAccent}
        label="dots"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />
    </CustomizeSectionWrapper>
  )
}

export { AccentColorOptions }
