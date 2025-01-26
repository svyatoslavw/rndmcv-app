import {
  CustomizationSelector,
  selectCustomizationResume,
  useCustomizationActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizeSectionWrapper } from "@/shared/ui"

const LANGUAGES_ICONS = ["★", "●", "✦", "■", "◉"]

const SelectLanguagesIcon = () => {
  const { languages } = useAppSelector(selectCustomizationResume("sections"))
  const { updateSections } = useCustomizationActions()

  const onSelectIcon = (icon: string) => {
    updateSections({ key: "languages", value: { icon } })
  }

  return (
    <CustomizeSectionWrapper heading="Icon">
      <CustomizationSelector
        items={LANGUAGES_ICONS}
        selectedItem={LANGUAGES_ICONS.find((icon) => icon === languages.icon)!}
        onChange={(icon) => onSelectIcon(icon)}
      />
    </CustomizeSectionWrapper>
  )
}

export { SelectLanguagesIcon }

