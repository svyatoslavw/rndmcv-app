"use client"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { CustomizeSpacing } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const FONT_SIZES = [4, 5, 6, 7, 8, 9, 10]
const MARGIN_LIST = [8, 12, 16, 20, 24, 28, 32]
const LINE_HEIGHT_LIST = [1, 1.15, 1.3, 1.45, 1.6, 1.75, 1.9]

const CustomizeSpacingList = () => {
  const dispatch = useAppDispatch()
  const {
    spacing: { fontSize, marginX, marginY, lineHeight }
  } = useAppSelector(selectCustomizationResume)

  return (
    <CustomizeWrapper heading="Spacing">
      <CustomizeSpacing
        step={1}
        title="Font Size"
        item={fontSize}
        items={FONT_SIZES}
        onChange={(fz) =>
          dispatch(updateCustomization({ key: "spacing", value: { fontSize: fz } }))
        }
      />
      <CustomizeSpacing
        title="Left & Right Margin"
        item={marginX}
        items={MARGIN_LIST}
        onChange={(fz) => dispatch(updateCustomization({ key: "spacing", value: { marginX: fz } }))}
      />
      <CustomizeSpacing
        title="Top & Bottom Margin"
        item={marginY}
        items={MARGIN_LIST}
        onChange={(fz) => dispatch(updateCustomization({ key: "spacing", value: { marginY: fz } }))}
      />
      <CustomizeSpacing
        title="Line Height"
        item={lineHeight}
        items={LINE_HEIGHT_LIST}
        step={0.15}
        onChange={(fz) =>
          dispatch(
            updateCustomization({
              key: "spacing",
              value: { lineHeight: Math.round(fz * 100) / 100 }
            })
          )
        }
      />
    </CustomizeWrapper>
  )
}

export { CustomizeSpacingList }
