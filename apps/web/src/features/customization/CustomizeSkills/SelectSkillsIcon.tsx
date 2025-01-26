import {
  CustomizationSelector,
  selectCustomizationResume,
  useCustomizationActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizeSectionWrapper } from "@/shared/ui"

const SKILLS_ICONS = ["★", "●", "✦", "■", "◉"]

const SelectSkillsIcon = () => {
  const { skills } = useAppSelector(selectCustomizationResume("sections"))
  const { updateSections } = useCustomizationActions()

  const onSelectIcon = (icon: string) => {
    updateSections({ key: "skills", value: { icon } })
  }

  return (
    <CustomizeSectionWrapper heading="Icon">
      <CustomizationSelector
        items={SKILLS_ICONS}
        selectedItem={skills.icon}
        onChange={onSelectIcon}
      />
    </CustomizeSectionWrapper>
  )
}

export { SelectSkillsIcon }

