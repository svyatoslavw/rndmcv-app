import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateSections } from "@/entities/resume"
import { TypeExperience } from "@/shared/lib/types"
import { Checkbox, CustomizeSectionWrapper, Label } from "@/shared/ui"

const CustomizeExperienceVisibility = () => {
  const dispatch = useAppDispatch()
  const { experience } = useAppSelector(selectCustomizationResume("sections"))

  const onChangeVisibility = (value: keyof TypeExperience) => {
    dispatch(updateSections({ key: "experience", value: { [value]: !experience[value] } }))
  }

  return (
    <CustomizeSectionWrapper className="justify-between" heading="Visibility">
      <Label className="flex items-center gap-2">
        <Checkbox
          checked={experience.showDates}
          className="size-5"
          onCheckedChange={() => onChangeVisibility("showDates")}
        />
        <span className="capitalize">Show dates</span>
      </Label>
      <Label className="flex items-center gap-2">
        <Checkbox
          checked={experience.showLocation}
          className="size-5"
          onCheckedChange={() => onChangeVisibility("showLocation")}
        />
        <span className="capitalize">Show location</span>
      </Label>
      <Label className="flex items-center gap-2">
        <Checkbox
          checked={experience.showDescription}
          className="size-5"
          onCheckedChange={() => onChangeVisibility("showDescription")}
        />
        <span className="capitalize">Show description</span>
      </Label>
    </CustomizeSectionWrapper>
  )
}

export { CustomizeExperienceVisibility }
