import { ChangeLanguagesVisibility, SelectLanguagesIcon } from "@/features"
import { SectionWrapper } from "@/shared/ui"

const CustomizeLanguagesList = () => {
  return (
    <SectionWrapper heading="Languages">
      <ChangeLanguagesVisibility />
      <SelectLanguagesIcon />
    </SectionWrapper>
  )
}

export { CustomizeLanguagesList }
