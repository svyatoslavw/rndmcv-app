import { selectCustomizationResume, useCustomizationActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { Checkbox, Label } from "@/shared/ui"

const NameBoldToggler = () => {
  const { updateCustomization } = useCustomizationActions()
  const { isBold } = useAppSelector(selectCustomizationResume("name"))

  const onChangeIsBold = () => {
    updateCustomization({ key: "name", value: { isBold: !isBold } })
  }

  return (
    <Label className="flex items-center gap-2">
      <Checkbox checked={isBold} className="size-5" onCheckedChange={onChangeIsBold} />
      <span className="capitalize">Name bold</span>
    </Label>
  )
}

export { NameBoldToggler }
