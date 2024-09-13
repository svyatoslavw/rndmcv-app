import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { BORDER_SIZES } from "@/shared/lib/constants"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import type { TBorderSize } from "@/shared/lib/types"
import { convertValueFromObject } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const borderSizeMap: Record<TBorderSize, string> = {
  "4": "S",
  "8": "M",
  "12": "L"
}

const CustomizeChangeBorderSize = () => {
  const dispatch = useAppDispatch()
  const {
    colors: { borderSize: sz }
  } = useAppSelector(selectCustomizationResume)

  const onChangeSize = (size: TBorderSize) => {
    dispatch(updateCustomization({ key: "colors", value: { borderSize: size } }))
  }

  return (
    <CustomizeSectionWrapper heading="Size">
      {BORDER_SIZES.map((size) => (
        <Button
          key={size}
          variant={sz === size ? "default" : "outline"}
          onClick={() => onChangeSize(size)}
        >
          {convertValueFromObject(size, borderSizeMap)}
        </Button>
      ))}
    </CustomizeSectionWrapper>
  )
}

export { CustomizeChangeBorderSize }
