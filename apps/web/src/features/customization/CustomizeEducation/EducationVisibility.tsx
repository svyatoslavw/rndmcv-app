import { Checkbox, Label } from "@rndm/ui/components"

import { selectCustomizationResume, useResumeActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { EducationOptions } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"

const EducationVisibility = () => {
  const { education } = useAppSelector(selectCustomizationResume("sections"))
  const { updateSections } = useResumeActions()

  const onChangeVisibility = (value: keyof EducationOptions) => {
    updateSections({ key: "education", value: { [value]: !education[value] } })
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

export { EducationVisibility }
