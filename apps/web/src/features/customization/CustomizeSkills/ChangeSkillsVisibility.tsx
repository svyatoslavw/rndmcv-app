import { Checkbox, Label } from "@rndm/ui/components"

import { selectCustomizationResume, useResumeActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizeSectionWrapper } from "@/shared/ui"

const ChangeSkillsVisibility = () => {
  const { skills } = useAppSelector(selectCustomizationResume("sections"))
  const { updateSections } = useResumeActions()

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
