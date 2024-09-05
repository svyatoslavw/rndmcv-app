import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Checkbox, Label } from "@/shared/ui"

const CustomizeNameBold = () => {
  const dispatch = useAppDispatch()
  const {
    name: { isBold }
  } = useAppSelector(selectCustomizationResume)

  const onChangeIsBold = () => {
    dispatch(updateCustomization({ key: "name", value: { isBold: !isBold } }))
  }

  return (
    <Label className="flex items-center gap-2">
      <Checkbox checked={isBold} onCheckedChange={onChangeIsBold} className="size-5" />
      <span className="capitalize">Name bold</span>
    </Label>
  )
}

export { CustomizeNameBold }
