import {
  CustomizationSelector,
  selectCustomizationResume,
  useResumeActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizeSectionWrapper } from "@/shared/ui"

const LANGUAGES_ICONS = ["★", "●", "✦", "■", "◉", "𖦹"]

const SelectLanguagesIcon = () => {
  const { languages } = useAppSelector(selectCustomizationResume("sections"))
  const { updateSections } = useResumeActions()

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
