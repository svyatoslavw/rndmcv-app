import type { TypeBorderSize } from "@/shared/types"

import { useAppDispatch, useAppSelector } from "@/app/store"
import {
  CustomizationSelector,
  selectCustomizationResume,
  toSizeObject,
  updateCustomization
} from "@/entities/resume"
import { convertValueFromObject } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const BORDER_SIZES: TypeBorderSize[] = [4, 8, 12]

const ChangeBorderSize = () => {
  const dispatch = useAppDispatch()
  const { borderSize } = useAppSelector(selectCustomizationResume("colors"))

  const onChangeSize = (borderSize: TypeBorderSize) => {
    dispatch(updateCustomization({ key: "colors", value: { borderSize } }))
  }

  return (
    <CustomizeSectionWrapper heading="Size">
      <CustomizationSelector
        items={BORDER_SIZES}
        render={({ value, isSelected, onClick }) => (
          <Button key={value} variant={isSelected ? "default" : "outline"} onClick={onClick}>
            {convertValueFromObject(value, toSizeObject(BORDER_SIZES))}
          </Button>
        )}
        selectedItem={borderSize}
        onChange={onChangeSize}
      />
    </CustomizeSectionWrapper>
  )
}

export { ChangeBorderSize }
