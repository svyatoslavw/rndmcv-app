import { useAppDispatch, useAppSelector } from "@/app/store"
import { CustomizationSelector, selectCustomizationResume, updateSections } from "@/entities/resume"
import { CustomizeSectionWrapper } from "@/shared/ui"

const LANGUAGES_ICONS = ["★", "●", "✦", "■", "◉"]

const SelectLanguagesIcon = () => {
  const dispatch = useAppDispatch()
  const { languages } = useAppSelector(selectCustomizationResume("sections"))

  const onSelectIcon = (icon: string) => {
    dispatch(updateSections({ key: "languages", value: { icon } }))
  }

  return (
    <CustomizeSectionWrapper heading="Icon">
      <CustomizationSelector
        items={LANGUAGES_ICONS}
        selectedItem={LANGUAGES_ICONS.find((icon) => icon === languages.icon)!}
        onChange={(icon) => onSelectIcon(icon)}
      />
      {/* {ICONS.map((icon) => (
        <Button
          key={icon}
          variant={icon === languages.icon ? "default" : "outline"}
          onClick={() => onSelectIcon(icon)}
        >
          {icon}
        </Button>
      ))} */}
    </CustomizeSectionWrapper>
  )
}

export { SelectLanguagesIcon }
