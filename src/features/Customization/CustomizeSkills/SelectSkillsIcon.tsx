import { useAppDispatch, useAppSelector } from "@/app/store"
import { CustomizationSelector, selectCustomizationResume, updateSections } from "@/entities/resume"
import { CustomizeSectionWrapper } from "@/shared/ui"

const SKILLS_ICONS = ["★", "●", "✦", "■", "◉"]

const SelectSkillsIcon = () => {
  const dispatch = useAppDispatch()
  const { skills } = useAppSelector(selectCustomizationResume("sections"))

  const onSelectIcon = (icon: string) => {
    dispatch(updateSections({ key: "skills", value: { icon } }))
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
