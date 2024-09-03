"use client"

import { TApplyAccent, toggleAccentVisibility } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Checkbox, CustomizeSectionWrapper, Label } from "@/shared/ui"

interface CheckboxApplyAccentColorProps {
  label: keyof TApplyAccent
  isAccent: TApplyAccent
  onChangeAccentVisibility: (key: keyof TApplyAccent) => void
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
  const isAccent = useAppSelector((state) => state.customization.colors.isAccent)

  const onChangeAccentVisibility = (key: keyof TApplyAccent) => {
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
