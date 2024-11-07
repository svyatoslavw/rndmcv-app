import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateSections } from "@/entities/resume"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const ICONS = ["★", "●", "✦", "■", "◉"]

const SelectSkillsIcon = () => {
  const dispatch = useAppDispatch()
  const { skills } = useAppSelector(selectCustomizationResume("sections"))

  const onSelectIcon = (icon: string) => {
    dispatch(updateSections({ key: "skills", value: { icon } }))
  }

  return (
    <CustomizeSectionWrapper heading="Icon">
      {ICONS.map((icon) => (
        <Button
          key={icon}
          variant={icon === skills.icon ? "default" : "outline"}
          onClick={() => onSelectIcon(icon)}
        >
          {icon}
        </Button>
      ))}
    </CustomizeSectionWrapper>
  )
}

export { SelectSkillsIcon }
