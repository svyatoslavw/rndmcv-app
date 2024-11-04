import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateSections } from "@/entities/resume"
import { Checkbox, CustomizeSectionWrapper, Label } from "@/shared/ui"

const CustomizeProjectsVisibility = () => {
  const dispatch = useAppDispatch()
  const { projects } = useAppSelector(selectCustomizationResume("sections"))

  const onChangeVisibility = () => {
    dispatch(
      updateSections({ key: "projects", value: { showDescription: !projects.showDescription } })
    )
  }

  return (
    <CustomizeSectionWrapper heading="Visibility">
      <Label className="flex items-center gap-2">
        <Checkbox
          checked={projects.showDescription}
          className="size-5"
          onCheckedChange={onChangeVisibility}
        />
        <span className="capitalize">Show description</span>
      </Label>
    </CustomizeSectionWrapper>
  )
}

export { CustomizeProjectsVisibility }
