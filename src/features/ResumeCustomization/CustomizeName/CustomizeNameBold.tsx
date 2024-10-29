import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { Checkbox, Label } from "@/shared/ui"

const CustomizeNameBold = () => {
  const dispatch = useAppDispatch()
  const { isBold } = useAppSelector(selectCustomizationResume("name"))

  const onChangeIsBold = () => {
    dispatch(updateCustomization({ key: "name", value: { isBold: !isBold } }))
  }

  return (
    <Label className="flex items-center gap-2">
      <Checkbox checked={isBold} className="size-5" onCheckedChange={onChangeIsBold} />
      <span className="capitalize">Name bold</span>
    </Label>
  )
}

export { CustomizeNameBold }
