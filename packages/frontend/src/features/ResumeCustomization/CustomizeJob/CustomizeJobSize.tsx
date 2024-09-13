import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { JOB_SIZES } from "@/shared/lib/constants"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import type { TJobSize } from "@/shared/lib/types"
import { convertValueFromObject } from "@/shared/lib/utils"
import { Button, CustomizeSectionWrapper } from "@/shared/ui"

const jobSizeMap: Record<TJobSize, string> = {
  "0": "XS",
  "2": "S",
  "6": "M",
  "10": "L",
  "14": "XL"
}

const CustomizeJobSize = () => {
  const dispatch = useAppDispatch()
  const {
    job: { size: sz }
  } = useAppSelector(selectCustomizationResume)

  const onChangeSize = (size: TJobSize) => {
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
