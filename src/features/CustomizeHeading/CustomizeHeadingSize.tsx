"use client"

import { THeadingSize, updateCustomization } from "@/entities/resume"
import { HEADING_SIZES } from "@/shared/lib"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { convertSize } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const headingSizeMap: Record<THeadingSize, string> = {
  "12": "XS",
  "16": "S",
  "20": "M",
  "24": "L",
  "28": "XL"
}

const CustomizeHeadingSize = () => {
  const dispatch = useAppDispatch()
  const sz = useAppSelector((state) => state.customization.heading.size)

  const onChangeSize = (size: THeadingSize) => {
    dispatch(updateCustomization({ key: "heading", value: { size } }))
  }

  return (
    <div>
      <h3 className="mb-2 font-semibold">Size</h3>
      <div className="flex flex-wrap gap-2">
        {HEADING_SIZES.map((size) => (
          <Button
            key={size}
            variant={sz === size ? "default" : "outline"}
            onClick={() => onChangeSize(size)}
          >
            {convertSize(size, headingSizeMap)}
          </Button>
        ))}
      </div>
    </div>
  )
}

export { CustomizeHeadingSize }
