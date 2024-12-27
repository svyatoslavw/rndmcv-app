import { selectCustomizationResume, useCustomizationActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { TypeExperience } from "@/shared/types"
import { Checkbox, CustomizeSectionWrapper, Label } from "@/shared/ui"

const ExperienceVisibility = () => {
  const { experience } = useAppSelector(selectCustomizationResume("sections"))
  const { updateSections } = useCustomizationActions()

  const onChangeVisibility = (value: keyof TypeExperience) => {
    updateSections({ key: "experience", value: { [value]: !experience[value] } })
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

export { ExperienceVisibility }
