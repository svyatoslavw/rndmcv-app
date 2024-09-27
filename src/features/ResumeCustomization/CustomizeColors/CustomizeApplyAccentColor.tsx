"use client"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, toggleAccentVisibility } from "@/entities/resume"
import type { TypeApplyAccent } from "@/shared/lib/types"
import { Checkbox, CustomizeSectionWrapper, Label } from "@/shared/ui"

interface CheckboxApplyAccentColorProps {
  label: keyof TypeApplyAccent
  isAccent: TypeApplyAccent
  onChangeAccentVisibility: (key: keyof TypeApplyAccent) => void
}

const CheckboxApplyAccentColor = ({
  label,
  isAccent,
  onChangeAccentVisibility
}: CheckboxApplyAccentColorProps) => {
  return (
    <Label className="flex items-center gap-2">
      <Checkbox
        checked={isAccent[label]}
        onCheckedChange={() => onChangeAccentVisibility(label)}
        className="size-5"
      />
      <span className="capitalize">{label.replace(/([A-Z])/g, " $1").toLowerCase()}</span>
    </Label>
  )
}

const CustomizeApplyAccentColor = () => {
  const dispatch = useAppDispatch()
  const {
    colors: { isAccent }
  } = useAppSelector(selectCustomizationResume)

  const onChangeAccentVisibility = (key: keyof TypeApplyAccent) => {
    dispatch(toggleAccentVisibility({ key }))
  }

  return (
    <CustomizeSectionWrapper heading="Apply accent color" className="grid grid-cols-2">
      <CheckboxApplyAccentColor
        isAccent={isAccent}
        label="name"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />
      <CheckboxApplyAccentColor
        isAccent={isAccent}
        label="headingsLines"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />
      <CheckboxApplyAccentColor
        isAccent={isAccent}
        label="headings"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />

      <CheckboxApplyAccentColor
        isAccent={isAccent}
        label="headerIcons"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />

      <CheckboxApplyAccentColor
        isAccent={isAccent}
        label="dates"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />
      <CheckboxApplyAccentColor
        isAccent={isAccent}
        label="linkIcons"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />
      <CheckboxApplyAccentColor
        isAccent={isAccent}
        label="dots"
        onChangeAccentVisibility={onChangeAccentVisibility}
      />
    </CustomizeSectionWrapper>
  )
}

export { CustomizeApplyAccentColor }
