import { TNameSize, updateCustomization } from "@/entities/resume"
import { NAME_SIZES } from "@/shared/lib"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { convertSize } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const nameSizeMap: Record<TNameSize, string> = {
  "0": "XS",
  "4": "S",
  "8": "M",
  "12": "L",
  "16": "XL"
}

const CustomizeNameSize = () => {
  const dispatch = useAppDispatch()
  const sz = useAppSelector((state) => state.customization.name.size)

  const onChangeSize = (size: TNameSize) => {
    dispatch(updateCustomization({ key: "name", value: { size } }))
  }
  return (
    <div>
      <h3 className="mb-2 font-semibold">Size</h3>
      <div className="flex flex-wrap gap-2">
        {NAME_SIZES.map((size) => (
          <Button
            key={size}
            variant={sz === size ? "default" : "outline"}
            onClick={() => onChangeSize(size)}
          >
            {convertSize(size, nameSizeMap)}
          </Button>
        ))}
      </div>
    </div>
  )
}

export { CustomizeNameSize }
