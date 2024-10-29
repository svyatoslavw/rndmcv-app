import { CustomizeLanguagesIcon, CustomizeLanguagesVisibility } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeLanguagesList = () => {
  return (
    <CustomizeWrapper heading="Languages">
      <CustomizeLanguagesVisibility />
      <CustomizeLanguagesIcon />
    </CustomizeWrapper>
  )
}

export { CustomizeLanguagesList }
