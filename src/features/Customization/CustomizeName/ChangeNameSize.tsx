import type { TypeNameSize } from "@/shared/types"

import { useAppDispatch, useAppSelector } from "@/app/store"
import {
  CustomizationSelector,
  selectCustomizationResume,
  toSizeObject,
  updateCustomization
} from "@/entities/resume"
import { convertValueFromObject } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const nameSizeMap: Record<TypeNameSize, string> = {
  "0": "XS",
  "4": "S",
  "8": "M",
  "12": "L",
  "16": "XL"
}

const NAME_SIZES: TypeNameSize[] = [0, 4, 8, 12, 16]

const ChangeNameSize = () => {
  const dispatch = useAppDispatch()
  const { size: sz } = useAppSelector(selectCustomizationResume("name"))

  const onChangeSize = (size: TypeNameSize) => {
    dispatch(updateCustomization({ key: "name", value: { size } }))
  }

  return (
    <CustomizeSectionWrapper heading="Size">
      <CustomizationSelector
        items={NAME_SIZES}
        render={({ value, isSelected, onClick }) => (
          <Button key={value} variant={isSelected ? "default" : "outline"} onClick={onClick}>
            {convertValueFromObject(value, toSizeObject(NAME_SIZES))}
          </Button>
        )}
        selectedItem={sz}
        onChange={onChangeSize}
      />
    </CustomizeSectionWrapper>
  )
}

export { ChangeNameSize }
