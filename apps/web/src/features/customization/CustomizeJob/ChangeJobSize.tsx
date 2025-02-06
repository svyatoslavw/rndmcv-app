import { Button } from "@rndm/ui/components"

import {
  CustomizationSelector,
  selectCustomizationResume,
  useResumeActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { convertValueFromObject, toSizeObject } from "@/shared/lib/utils"
import type { JobSize } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"

const JOB_SIZES: JobSize[] = [0, 2, 6, 10, 14]

const ChangeJobSize = () => {
  const { size } = useAppSelector(selectCustomizationResume("job"))
  const { updateCustomization } = useResumeActions()

  const onChangeSize = (size: JobSize) => {
    updateCustomization({ key: "job", value: { size } })
  }

  return (
    <CustomizeSectionWrapper heading="Size">
      <CustomizationSelector
        items={JOB_SIZES}
        render={({ value, isSelected, onClick }) => (
          <Button key={value} variant={isSelected ? "default" : "outline"} onClick={onClick}>
            {convertValueFromObject(value, toSizeObject(JOB_SIZES))}
          </Button>
        )}
        selectedItem={size}
        onChange={(option) => onChangeSize(option)}
      />
    </CustomizeSectionWrapper>
  )
}

export { ChangeJobSize }
