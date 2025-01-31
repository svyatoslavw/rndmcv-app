"use client"

import { Button } from "@rndm/ui/components"

import {
  CustomizationSelector,
  selectCustomizationResume,
  useCustomizationActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { convertValueFromObject, toSizeObject } from "@/shared/lib/utils"
import type { TypeHeadingSize } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"

const HEADING_SIZES: TypeHeadingSize[] = [2, 4, 6, 8, 10]

const ChangeHeadingSize = () => {
  const { size } = useAppSelector(selectCustomizationResume("heading"))
  const { updateCustomization } = useCustomizationActions()

  const onChangeSize = (size: TypeHeadingSize) => {
    updateCustomization({ key: "heading", value: { size } })
  }

  return (
    <CustomizeSectionWrapper heading="Size">
      <CustomizationSelector
        items={HEADING_SIZES}
        render={({ value, isSelected, onClick }) => (
          <Button key={value} variant={isSelected ? "default" : "outline"} onClick={onClick}>
            {convertValueFromObject(value, toSizeObject(HEADING_SIZES))}
          </Button>
        )}
        selectedItem={size}
        onChange={onChangeSize}
      />
    </CustomizeSectionWrapper>
  )
}

export { ChangeHeadingSize }
