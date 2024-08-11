import { TJobSize, updateCustomization } from "@/entities/resume"
import { JOB_SIZES } from "@/shared/lib"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { convertSize } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const jobSizeMap: Record<TJobSize, string> = {
  "0": "XS",
  "2": "S",
  "6": "M",
  "10": "L",
  "14": "XL"
}

const CustomizeJobSize = () => {
  const dispatch = useAppDispatch()
  const sz = useAppSelector((state) => state.customization.job.size)

  const onChangeSize = (size: TJobSize) => {
    dispatch(updateCustomization({ key: "job", value: { size } }))
  }
  return (
    <div>
      <h3 className="mb-2 font-semibold">Size</h3>
      <div className="flex flex-wrap gap-2">
        {JOB_SIZES.map((size) => (
          <Button
            key={size}
            variant={sz === size ? "default" : "outline"}
            onClick={() => onChangeSize(size)}
          >
            {convertSize(size, jobSizeMap)}
          </Button>
        ))}
      </div>
    </div>
  )
}

export { CustomizeJobSize }
