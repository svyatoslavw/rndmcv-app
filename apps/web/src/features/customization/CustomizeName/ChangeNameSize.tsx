import {
  CustomizationSelector,
  selectCustomizationResume,
  useCustomizationActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { convertValueFromObject, toSizeObject } from "@/shared/lib/utils"
import type { TypeNameSize } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"
import { Button } from "@rndm/ui/components"

const NAME_SIZES: TypeNameSize[] = [0, 4, 8, 12, 16]

const ChangeNameSize = () => {
  const { size: sz } = useAppSelector(selectCustomizationResume("name"))
  const { updateCustomization } = useCustomizationActions()

  const onChangeSize = (size: TypeNameSize) => {
    updateCustomization({ key: "name", value: { size } })
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

