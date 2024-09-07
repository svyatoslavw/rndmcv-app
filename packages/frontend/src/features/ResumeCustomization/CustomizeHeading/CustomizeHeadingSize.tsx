"use client"

import { THeadingSize, selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { HEADING_SIZES } from "@/shared/lib/constants"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { convertSize } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const headingSizeMap: Record<THeadingSize, string> = {
  "12": "XS",
  "16": "S",
  "20": "M",
  "24": "L",
  "28": "XL"
}

const CustomizeHeadingSize = () => {
  const dispatch = useAppDispatch()
  const {
    heading: { 10: sz }
  } = useAppSelector(selectCustomizationResume)

  const onChangeSize = (size: THeadingSize) => {
    dispatch(updateCustomization({ key: "heading", value: { 10: size } }))
  }

  return (
    <CustomizeSectionWrapper heading="Size">
      {HEADING_SIZES.map((size) => (
        <Button
          key={size}
          variant={sz === size ? "default" : "outline"}
          onClick={() => onChangeSize(size)}
        >
          {convertSize(size, headingSizeMap)}
        </Button>
      ))}
    </CustomizeSectionWrapper>
  )
}

export { CustomizeHeadingSize }
