import { Checkbox, Label } from "@rndm/ui/components"

import { selectCustomizationResume, useResumeActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { ExperienceOptions } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"

const ExperienceVisibility = () => {
  const { experience } = useAppSelector(selectCustomizationResume("sections"))
  const { updateSections } = useResumeActions()

  const onChangeVisibility = (value: keyof ExperienceOptions) => {
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
