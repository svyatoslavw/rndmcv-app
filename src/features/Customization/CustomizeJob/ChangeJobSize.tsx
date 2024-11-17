import type { TypeJobSize } from "@/shared/types"

import { useAppDispatch, useAppSelector } from "@/app/store"
import {
  CustomizationSelector,
  selectCustomizationResume,
  toSizeObject,
  updateCustomization
} from "@/entities/resume"
import { convertValueFromObject } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const JOB_SIZES: TypeJobSize[] = [0, 2, 6, 10, 14]

const ChangeJobSize = () => {
  const dispatch = useAppDispatch()
  const { size } = useAppSelector(selectCustomizationResume("job"))

  const onChangeSize = (size: TypeJobSize) => {
    dispatch(updateCustomization({ key: "job", value: { size } }))
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
