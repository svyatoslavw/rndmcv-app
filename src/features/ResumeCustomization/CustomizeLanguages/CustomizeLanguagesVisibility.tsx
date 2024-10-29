import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateSections } from "@/entities/resume"
import { Checkbox, CustomizeSectionWrapper, Label } from "@/shared/ui"

const CustomizeLanguagesVisibility = () => {
  const dispatch = useAppDispatch()
  const { languages } = useAppSelector(selectCustomizationResume("sections"))

  const onChangeVisibility = () => {
    dispatch(updateSections({ key: "languages", value: { showLevel: !languages.showLevel } }))
  }

  return (
    <CustomizeSectionWrapper className="flex-col" heading="Visibility">
      <Label className="flex items-center gap-2">
        <Checkbox
          checked={languages.showLevel}
          className="size-5"
          onCheckedChange={onChangeVisibility}
        />
        <span className="capitalize">Show level</span>
      </Label>
    </CustomizeSectionWrapper>
  )
}

export { CustomizeLanguagesVisibility }
