import { Button } from "@rndm/ui/components"

import {
  CustomizationSelector,
  selectCustomizationResume,
  useResumeActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { convertValueFromObject, toSizeObject } from "@/shared/lib/utils"
import { BorderSize } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"

const BORDER_SIZES: BorderSize[] = [4, 8, 12]

const ChangeBorderSize = () => {
  const { borderSize } = useAppSelector(selectCustomizationResume("colors"))
  const { updateCustomization } = useResumeActions()

  const onChangeSize = (borderSize: BorderSize) => {
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
