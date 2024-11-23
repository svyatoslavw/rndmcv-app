import { selectCustomizationResume, useCustomizationActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { Checkbox, CustomizeSectionWrapper, Label } from "@/shared/ui"

const ChangeSkillsVisibility = () => {
  const { skills } = useAppSelector(selectCustomizationResume("sections"))
  const { updateSections } = useCustomizationActions()

  const onChangeVisibility = () => {
    updateSections({ key: "skills", value: { showLevel: !skills.showLevel } })
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

export { ChangeSkillsVisibility }
