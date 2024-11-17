"use client"

import { useAppDispatch, useAppSelector } from "@/app/store"
import {
  CustomizationSelector,
  selectCustomizationResume,
  toSizeObject,
  updateCustomization
} from "@/entities/resume"
import { convertValueFromObject } from "@/shared/lib/utils"
import type { TypeHeadingSize } from "@/shared/types"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const HEADING_SIZES: TypeHeadingSize[] = [2, 4, 6, 8, 10]

const ChangeHeadingSize = () => {
  const dispatch = useAppDispatch()
  const { size } = useAppSelector(selectCustomizationResume("heading"))

  const onChangeSize = (size: TypeHeadingSize) => {
    dispatch(updateCustomization({ key: "heading", value: { size } }))
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
