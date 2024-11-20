"use client"

import type { TypeApplyAccent } from "@/shared/types"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, toggleAccentVisibility } from "@/entities/resume"
import { Checkbox, CustomizeSectionWrapper, Label } from "@/shared/ui"

interface CheckboxApplyAccentColorProps {
  label: keyof TypeApplyAccent
  isAccent: TypeApplyAccent
  onChangeAccentVisibility: (key: keyof TypeApplyAccent) => void
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
  const dispatch = useAppDispatch()
  const { isAccent } = useAppSelector(selectCustomizationResume("colors"))

  const onChangeAccentVisibility = (key: keyof TypeApplyAccent) => {
    dispatch(toggleAccentVisibility({ key }))
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