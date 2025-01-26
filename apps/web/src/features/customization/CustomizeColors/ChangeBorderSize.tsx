import { Button } from "@rndm/ui/components"

import {
  CustomizationSelector,
  ResumeDomain,
  selectCustomizationResume,
  useCustomizationActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { convertValueFromObject, toSizeObject } from "@/shared/lib/utils"
import { CustomizeSectionWrapper } from "@/shared/ui"

const BORDER_SIZES: ResumeDomain.BorderSize[] = [4, 8, 12]

const ChangeBorderSize = () => {
  const { borderSize } = useAppSelector(selectCustomizationResume("colors"))
  const { updateCustomization } = useCustomizationActions()

  const onChangeSize = (borderSize: ResumeDomain.BorderSize) => {
    updateCustomization({ key: "colors", value: { borderSize } })
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
