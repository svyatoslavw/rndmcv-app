import {
  CustomizationSelector,
  selectCustomizationResume,
  useCustomizationActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizeSectionWrapper } from "@/shared/ui"
import { Button } from "@rndm/ui/components"

const JOB_STYLES = [
  { label: "Normal", value: false, className: "" },
  { label: "Italic", value: true, className: "italic" }
]

const JobItalicToggler = () => {
  const { isItalic } = useAppSelector(selectCustomizationResume("job"))
  const { updateCustomization } = useCustomizationActions()

  const onChangeIsItalic = (value: boolean) => {
    updateCustomization({ key: "job", value: { isItalic: value } })
  }

  return (
    <CustomizeSectionWrapper heading="Style">
      <CustomizationSelector
        items={JOB_STYLES}
        render={({ value, isSelected, onClick }) => (
          <Button
            key={value.label}
            className={value.className}
            variant={isSelected ? "default" : "outline"}
            onClick={onClick}
          >
            {value.label}
          </Button>
        )}
        selectedItem={JOB_STYLES.find((option) => option.value === isItalic)!}
        onChange={(option) => onChangeIsItalic(option.value)}
      />
    </CustomizeSectionWrapper>
  )
}

export { JobItalicToggler }

