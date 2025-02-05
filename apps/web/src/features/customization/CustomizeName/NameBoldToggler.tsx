import { Checkbox, Label } from "@rndm/ui/components"

import { selectCustomizationResume, useResumeActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"

const NameBoldToggler = () => {
  const { updateCustomization } = useResumeActions()
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
