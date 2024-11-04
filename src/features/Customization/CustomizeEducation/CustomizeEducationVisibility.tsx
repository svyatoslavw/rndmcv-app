import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateSections } from "@/entities/resume"
import { TypeEducation } from "@/shared/lib/types"
import { Checkbox, CustomizeSectionWrapper, Label } from "@/shared/ui"

const CustomizeEducationVisibility = () => {
  const dispatch = useAppDispatch()
  const { education } = useAppSelector(selectCustomizationResume("sections"))

  const onChangeVisibility = (value: keyof TypeEducation) => {
    dispatch(updateSections({ key: "education", value: { [value]: !education[value] } }))
  }

  return (
    <CustomizeSectionWrapper className="justify-between" heading="Visibility">
      <Label className="flex items-center gap-2">
        <Checkbox
          checked={education.showDates}
          className="size-5"
          onCheckedChange={() => onChangeVisibility("showDates")}
        />
        <span className="capitalize">Show dates</span>
      </Label>
      <Label className="flex items-center gap-2">
        <Checkbox
          checked={education.showLocation}
          className="size-5"
          onCheckedChange={() => onChangeVisibility("showLocation")}
        />
        <span className="capitalize">Show location</span>
      </Label>
      <Label className="flex items-center gap-2">
        <Checkbox
          checked={education.showDegree}
          className="size-5"
          onCheckedChange={() => onChangeVisibility("showDegree")}
        />
        <span className="capitalize">Show degrees</span>
      </Label>
    </CustomizeSectionWrapper>
  )
}

export { CustomizeEducationVisibility }
