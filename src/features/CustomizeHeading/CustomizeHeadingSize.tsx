"use client"

import { THeadingSize, setHeadingStyle } from "@/entities/resume"
import { HEADING_SIZES } from "@/shared/lib"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { convertSizeInWord } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const CustomizeHeadingSize = () => {
  const dispatch = useAppDispatch()
  const sz = useAppSelector((state) => state.customization.heading.size)

  const onChangeSize = (value: THeadingSize) => {
    dispatch(setHeadingStyle({ key: "size", value }))
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
            {convertSizeInWord(size)}
          </Button>
        ))}
      </div>
    </div>
  )
}

export { CustomizeHeadingSize }
