import type { TypeBorderSize } from "@/shared/types"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { convertValueFromObject } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const borderSizeMap: Record<TypeBorderSize, string> = {
  "4": "S",
  "8": "M",
  "12": "L"
}

const BORDER_SIZES: TypeBorderSize[] = [4, 8, 12]

const ChangeBorderSize = () => {
  const dispatch = useAppDispatch()
  const { borderSize } = useAppSelector(selectCustomizationResume("colors"))

  const onChangeSize = (borderSize: TypeBorderSize) => {
    dispatch(updateCustomization({ key: "colors", value: { borderSize } }))
  }

  return (
    <CustomizeSectionWrapper heading="Size">
      {BORDER_SIZES.map((size) => (
        <Button
          key={size}
          variant={borderSize === size ? "default" : "outline"}
          onClick={() => onChangeSize(size)}
        >
          {convertValueFromObject(size, borderSizeMap)}
        </Button>
      ))}
    </CustomizeSectionWrapper>
  )
}

export { ChangeBorderSize }
