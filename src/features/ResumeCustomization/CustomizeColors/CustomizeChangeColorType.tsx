"use client"

import Image from "next/image"

import { useAppDispatch, useAppSelector } from "@/app/store"
import {
  CustomizeColorOption,
  selectCustomizationResume,
  updateCustomization
} from "@/entities/resume"
import type { TypeColorType } from "@/shared/lib/types"

const CustomizeChangeColorType = () => {
  const dispatch = useAppDispatch()
  const {
    colors: { type }
  } = useAppSelector(selectCustomizationResume)

  const onChangeColorSubtype = (type: TypeColorType) => {
    dispatch(updateCustomization({ key: "colors", value: { type } }))
  }

  return (
    <div>
      <div className="flex gap-3">
        <CustomizeColorOption
          type="accent"
          currentType={type}
          onChange={() => onChangeColorSubtype("accent")}
        >
          <div className="h-12 w-24 rounded-lg bg-red-500" />
        </CustomizeColorOption>
        <CustomizeColorOption
          type="multicolor"
          currentType={type}
          onChange={() => onChangeColorSubtype("multicolor")}
        >
          <div className="flex h-12 w-24 rounded-lg">
            <div className="flex w-1/2 flex-col items-center justify-center rounded-l-lg bg-foreground text-2xl font-bold text-background">
              <span>T</span>
              <span className="h-1 w-6 bg-red-500" />
            </div>
            <div className="w-1/2 rounded-r-lg bg-blue-500" />
          </div>
        </CustomizeColorOption>
        <CustomizeColorOption
          type="image"
          currentType={type}
          onChange={() => onChangeColorSubtype("image")}
        >
          <Image
            alt="logo"
            src="/images/logo.webp"
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
