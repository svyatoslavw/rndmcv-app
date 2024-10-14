import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import type { TypeJobSize } from "@/shared/lib/types"
import { convertValueFromObject } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const jobSizeMap: Record<TypeJobSize, string> = {
  "0": "XS",
  "2": "S",
  "6": "M",
  "10": "L",
  "14": "XL"
}

const JOB_SIZES: TypeJobSize[] = [0, 2, 6, 10, 14]

const CustomizeJobSize = () => {
  const dispatch = useAppDispatch()
  const {
    job: { size: sz }
  } = useAppSelector(selectCustomizationResume)

  const onChangeSize = (size: TypeJobSize) => {
    dispatch(updateCustomization({ key: "job", value: { size } }))
  }
  return (
    <CustomizeSectionWrapper heading="Size">
      {JOB_SIZES.map((size) => (
        <Button
          key={size}
          variant={sz === size ? "default" : "outline"}
          onClick={() => onChangeSize(size)}
        >
          {convertValueFromObject(size, jobSizeMap)}
        </Button>
      ))}
    </CustomizeSectionWrapper>
  )
}

export { CustomizeJobSize }
