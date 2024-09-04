"use client"

import Image from "next/image"

import { CustomizeColorOption, TColorType, updateCustomization } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"

const CustomizeChangeColorType = () => {
  const dispatch = useAppDispatch()
  const subtype = useAppSelector((state) => state.customization.colors.type)

  const onChangeColorSubtype = (type: TColorType) => {
    dispatch(updateCustomization({ key: "colors", value: { type } }))
  }

  return (
    <div>
      <div className="flex gap-3">
        <CustomizeColorOption
          type="accent"
          currentType={subtype}
          onChange={() => onChangeColorSubtype("accent")}
        >
          <div className="h-12 w-24 rounded-lg bg-red-500" />
        </CustomizeColorOption>
        <CustomizeColorOption
          type="multicolor"
          currentType={subtype}
          onChange={() => onChangeColorSubtype("multicolor")}
        >
          <div className="flex h-12 w-24 rounded-lg border">
            <div className="flex w-1/2 flex-col items-center justify-center text-2xl font-bold">
              <span>T</span>
              <span className="h-1 w-6 bg-red-500" />
            </div>
            <div className="w-1/2 rounded-r-lg bg-blue-500" />
          </div>
        </CustomizeColorOption>
        <CustomizeColorOption
          type="image"
          currentType={subtype}
          onChange={() => onChangeColorSubtype("image")}
        >
          <Image
            alt="logo"
            src="/logo.webp"
            width={96}
            height={96}
            className="h-12 w-24 rounded-lg bg-green-500 object-cover"
          ></Image>
        </CustomizeColorOption>
      </div>
    </div>
  )
}

export { CustomizeChangeColorType }
