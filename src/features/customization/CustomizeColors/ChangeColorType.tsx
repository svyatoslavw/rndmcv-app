"use client"

import Image from "next/image"

import {
  ColorButton,
  ResumeDomain,
  selectCustomizationResume,
  useCustomizationActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"

const ChangeColorType = () => {
  const { type } = useAppSelector(selectCustomizationResume("colors"))
  const { updateCustomization } = useCustomizationActions()

  const onChangeColorSubtype = (type: ResumeDomain.ColorType) => {
    updateCustomization({ key: "colors", value: { type } })
  }

  return (
    <div>
      <div className="flex gap-3">
        <ColorButton
          colorType="accent"
          currentType={type}
          onChange={() => onChangeColorSubtype("accent")}
        >
          <div className="h-12 w-24 rounded-xl border-4 bg-red-500 dark:border-secondary" />
        </ColorButton>
        <ColorButton
          colorType="multicolor"
          currentType={type}
          onChange={() => onChangeColorSubtype("multicolor")}
        >
          <div className="flex h-12 w-24 rounded-xl border-4 dark:border-secondary">
            <div className="flex w-1/2 flex-col items-center justify-center rounded-l-lg bg-background text-2xl font-bold text-foreground">
              <span>T</span>
              <span className="h-1 w-6 bg-red-500" />
            </div>
            <div className="w-1/2 rounded-r-lg bg-blue-500" />
          </div>
        </ColorButton>
        <ColorButton
          disabled
          colorType="image"
          currentType={type}
          onChange={() => onChangeColorSubtype("image")}
        >
          <Image
            alt="logo"
            className="h-12 w-24 select-none rounded-xl border-4 bg-green-500 object-cover dark:border-secondary"
            draggable={false}
            height={96}
            src="/images/logo.webp"
            width={96}
          />
        </ColorButton>
      </div>
    </div>
  )
}

export { ChangeColorType }
