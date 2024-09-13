import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { NAME_SIZES } from "@/shared/lib/constants"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import type { TNameSize } from "@/shared/lib/types"
import { convertValueFromObject } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const nameSizeMap: Record<TNameSize, string> = {
  "0": "XS",
  "4": "S",
  "8": "M",
  "12": "L",
  "16": "XL"
}

const CustomizeNameSize = () => {
  const dispatch = useAppDispatch()
  const {
    name: { size: sz }
  } = useAppSelector(selectCustomizationResume)

  const onChangeSize = (size: TNameSize) => {
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
