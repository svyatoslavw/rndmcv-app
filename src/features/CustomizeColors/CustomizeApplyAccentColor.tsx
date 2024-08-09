"use client"

import { TApplyAccent, toggleAccentVisibility } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Checkbox, Label } from "@/shared/ui"

interface CheckboxApplyAccentColorProps {
  label: keyof TApplyAccent
  applyAccent: TApplyAccent
  onChangeAccentVisibility: (key: keyof TApplyAccent) => void
}

const CheckboxApplyAccentColor = ({
  label,
  applyAccent,
  onChangeAccentVisibility
}: CheckboxApplyAccentColorProps) => {
  return (
    <Label className="flex items-center gap-2">
      <Checkbox
        checked={applyAccent[label]}
        onCheckedChange={() => onChangeAccentVisibility(label)}
        className="size-5"
      />
      <span className="capitalize">{label.replace(/([A-Z])/g, " $1").toLowerCase()}</span>
    </Label>
  )
}

const CustomizeApplyAccentColor = () => {
  const dispatch = useAppDispatch()
  const applyAccent = useAppSelector((state) => state.customization.colors.applyAccent)

  const onChangeAccentVisibility = (key: keyof TApplyAccent) => {
    dispatch(toggleAccentVisibility({ key }))
  }

  return (
    <div>
      <h3 className="mb-4 font-semibold">Apply accent color</h3>
      <div className="grid grid-cols-2 gap-2">
        <CheckboxApplyAccentColor
          applyAccent={applyAccent}
          label="name"
          onChangeAccentVisibility={onChangeAccentVisibility}
        />
        <CheckboxApplyAccentColor
          applyAccent={applyAccent}
          label="headingsLines"
          onChangeAccentVisibility={onChangeAccentVisibility}
        />
        <CheckboxApplyAccentColor
          applyAccent={applyAccent}
          label="headings"
          onChangeAccentVisibility={onChangeAccentVisibility}
        />

        <CheckboxApplyAccentColor
          applyAccent={applyAccent}
          label="headerIcons"
          onChangeAccentVisibility={onChangeAccentVisibility}
        />

        <CheckboxApplyAccentColor
          applyAccent={applyAccent}
          label="dates"
          onChangeAccentVisibility={onChangeAccentVisibility}
        />
        <CheckboxApplyAccentColor
          applyAccent={applyAccent}
          label="linkIcons"
          onChangeAccentVisibility={onChangeAccentVisibility}
        />
        <CheckboxApplyAccentColor
          applyAccent={applyAccent}
          label="dots"
          onChangeAccentVisibility={onChangeAccentVisibility}
        />
      </div>
    </div>
  )
}

export { CustomizeApplyAccentColor }
