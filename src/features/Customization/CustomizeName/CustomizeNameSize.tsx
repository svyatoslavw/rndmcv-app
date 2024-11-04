import type { TypeNameSize } from "@/shared/lib/types"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
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

const CustomizeNameSize = () => {
  const dispatch = useAppDispatch()
  const { size: sz } = useAppSelector(selectCustomizationResume("name"))

  const onChangeSize = (size: TypeNameSize) => {
    dispatch(updateCustomization({ key: "name", value: { size } }))
  }

  return (
    <CustomizeSectionWrapper heading="Size">
      {NAME_SIZES.map((size) => (
        <Button
          key={size}
          variant={sz === size ? "default" : "outline"}
          onClick={() => onChangeSize(size)}
        >
          {convertValueFromObject(size, nameSizeMap)}
        </Button>
      ))}
    </CustomizeSectionWrapper>
  )
}

export { CustomizeNameSize }
