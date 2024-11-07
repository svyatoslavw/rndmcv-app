import { ChangeLanguagesVisibility, SelectLanguagesIcon } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeLanguagesList = () => {
  return (
    <CustomizeWrapper heading="Languages">
      <ChangeLanguagesVisibility />
      <SelectLanguagesIcon />
    </CustomizeWrapper>
  )
}

export { CustomizeLanguagesList }
