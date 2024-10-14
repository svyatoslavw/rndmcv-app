"use client"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import type { TypeHeadingSize } from "@/shared/lib/types"
import { convertValueFromObject } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const headingSizeMap: Record<TypeHeadingSize, string> = {
  "2": "XS",
  "4": "S",
  "6": "M",
  "8": "L",
  "10": "XL"
}

const HEADING_SIZES: TypeHeadingSize[] = [2, 4, 6, 8, 10]

const CustomizeHeadingSize = () => {
  const dispatch = useAppDispatch()
  const {
    heading: { size: sz }
  } = useAppSelector(selectCustomizationResume)

  const onChangeSize = (size: TypeHeadingSize) => {
    dispatch(updateCustomization({ key: "heading", value: { size } }))
  }

  return (
    <CustomizeSectionWrapper heading="Size">
      {HEADING_SIZES.map((size) => (
        <Button
          key={size}
          variant={sz === size ? "default" : "outline"}
          onClick={() => onChangeSize(size)}
        >
          {convertValueFromObject(size, headingSizeMap)}
        </Button>
      ))}
    </CustomizeSectionWrapper>
  )
}

export { CustomizeHeadingSize }
