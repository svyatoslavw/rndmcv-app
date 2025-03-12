import {
  CustomizationSelector,
  selectCustomizationResume,
  useResumeActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizeSectionWrapper } from "@/shared/ui"

const SKILLS_ICONS = ["★", "●", "✦", "■", "◉", "𖦹"]

const SelectSkillsIcon = () => {
  const { skills } = useAppSelector(selectCustomizationResume("sections"))
  const { updateSections } = useResumeActions()

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
