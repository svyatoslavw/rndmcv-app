import { TApplyAccent, toggleAccentVisibility } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Checkbox } from "@/shared/ui"

const CustomizeApplyAccentColor = () => {
  const dispatch = useAppDispatch()
  const applyAccent = useAppSelector((state) => state.customization.colors.applyAccent)

  const onChangeAccentVisibility = (key: keyof TApplyAccent) => {
    dispatch(toggleAccentVisibility({ key }))
  }

  return (
    <div>
      <h3 className="mb-2 font-semibold">Apply accent color</h3>
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={applyAccent.name}
            onCheckedChange={() => onChangeAccentVisibility("name")}
            className="size-5"
          />
          <span>Name</span>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={applyAccent.headings}
            onCheckedChange={() => onChangeAccentVisibility("headings")}
            className="size-5"
          />
          <span>Headings</span>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={applyAccent.headingsLines}
            onCheckedChange={() => onChangeAccentVisibility("headingsLines")}
            className="size-5"
          />
          <span>Headings Lines</span>
        </div>
      </div>
    </div>
  )
}

export { CustomizeApplyAccentColor }
