import { useAppDispatch, useAppSelector } from "@/app/store"
import {
  CustomizationSelector,
  selectCustomizationResume,
  updateCustomization
} from "@/entities/resume"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const JOB_STYLES = [
  { label: "Normal", value: false, className: "" },
  { label: "Italic", value: true, className: "italic" }
]

const JobItalicToggler = () => {
  const dispatch = useAppDispatch()
  const { isItalic } = useAppSelector(selectCustomizationResume("job"))

  const onChangeIsItalic = (value: boolean) => {
    dispatch(updateCustomization({ key: "job", value: { isItalic: value } }))
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
