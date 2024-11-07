import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateSections } from "@/entities/resume"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const ICONS = ["★", "●", "✦", "■", "◉"]

const SelectLanguagesIcon = () => {
  const dispatch = useAppDispatch()
  const { languages } = useAppSelector(selectCustomizationResume("sections"))

  const onSelectIcon = (icon: string) => {
    dispatch(updateSections({ key: "languages", value: { icon } }))
  }

  return (
    <CustomizeSectionWrapper heading="Icon">
      {ICONS.map((icon) => (
        <Button
          key={icon}
          variant={icon === languages.icon ? "default" : "outline"}
          onClick={() => onSelectIcon(icon)}
        >
          {icon}
        </Button>
      ))}
    </CustomizeSectionWrapper>
  )
}

export { SelectLanguagesIcon }
