import { Checkbox, Label } from "@rndm/ui/components"

import { selectCustomizationResume, useResumeActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { CustomizeSectionWrapper } from "@/shared/ui"

const ChangeProjectsVisibility = () => {
  const { projects } = useAppSelector(selectCustomizationResume("sections"))
  const { updateSections } = useResumeActions()

  const onChangeVisibility = () => {
    updateSections({ key: "projects", value: { showDescription: !projects.showDescription } })
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

export { ChangeProjectsVisibility }
