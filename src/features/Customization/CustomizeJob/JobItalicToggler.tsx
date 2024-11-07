import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const JobItalicToggler = () => {
  const dispatch = useAppDispatch()
  const { isItalic } = useAppSelector(selectCustomizationResume("job"))

  const onChangeIsItalic = (value: boolean) => {
    dispatch(updateCustomization({ key: "job", value: { isItalic: value } }))
  }

  return (
    <CustomizeSectionWrapper heading="Style">
      <Button variant={!isItalic ? "default" : "outline"} onClick={() => onChangeIsItalic(false)}>
        Normal
      </Button>
      <Button
        className="italic"
        variant={isItalic ? "default" : "outline"}
        onClick={() => onChangeIsItalic(true)}
      >
        Italic
      </Button>
    </CustomizeSectionWrapper>
  )
}

export { JobItalicToggler }
