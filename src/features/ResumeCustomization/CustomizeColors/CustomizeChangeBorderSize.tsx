import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import type { TypeBorderSize } from "@/shared/lib/types"
import { convertValueFromObject } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const borderSizeMap: Record<TypeBorderSize, string> = {
  "4": "S",
  "8": "M",
  "12": "L"
}

const BORDER_SIZES: TypeBorderSize[] = [4, 8, 12]

const CustomizeChangeBorderSize = () => {
  const dispatch = useAppDispatch()
  const {
    colors: { borderSize: sz }
  } = useAppSelector(selectCustomizationResume)

  const onChangeSize = (size: TypeBorderSize) => {
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
