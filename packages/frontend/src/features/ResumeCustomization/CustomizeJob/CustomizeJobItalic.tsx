import { updateCustomization } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const CustomizeJobItalic = () => {
  const dispatch = useAppDispatch()
  const isItalic = useAppSelector((state) => state.customization.job.isItalic)

  const onChangeIsItalic = (value: boolean) => {
    dispatch(updateCustomization({ key: "job", value: { isItalic: value } }))
  }

  return (
    <CustomizeSectionWrapper heading="Style">
      <Button variant={!isItalic ? "default" : "outline"} onClick={() => onChangeIsItalic(false)}>
        Normal
      </Button>
      <Button
        variant={isItalic ? "default" : "outline"}
        onClick={() => onChangeIsItalic(true)}
        className="italic"
      >
        Italic
      </Button>
    </CustomizeSectionWrapper>
  )
}

export { CustomizeJobItalic }
