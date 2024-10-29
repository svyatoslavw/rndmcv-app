import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateSections } from "@/entities/resume"
import { Checkbox, CustomizeSectionWrapper, Label } from "@/shared/ui"

const CustomizeSkillsVisibility = () => {
  const dispatch = useAppDispatch()
  const { skills } = useAppSelector(selectCustomizationResume("sections"))

  const onChangeVisibility = () => {
    dispatch(updateSections({ key: "skills", value: { showLevel: !skills.showLevel } }))
  }

  return (
    <CustomizeSectionWrapper className="flex-col" heading="Visibility">
      <Label className="flex items-center gap-2">
        <Checkbox
          checked={skills.showLevel}
          className="size-5"
          onCheckedChange={onChangeVisibility}
        />
        <span className="capitalize">Show level</span>
      </Label>
    </CustomizeSectionWrapper>
  )
}

export { CustomizeSkillsVisibility }
