"use client"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectCustomizationResume, updateCustomization } from "@/entities/resume"
import { SpacingContoller } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const FONT_SIZES = [4, 5, 6, 7, 8, 9, 10]
const MARGIN_LIST = [8, 12, 16, 20, 24, 28, 32]
const LINE_HEIGHT_LIST = [1, 1.15, 1.3, 1.45, 1.6, 1.75, 1.9]

const CustomizeSpacingList = () => {
  const dispatch = useAppDispatch()
  const { fontSize, marginX, marginY, lineHeight } = useAppSelector(
    selectCustomizationResume("spacing")
  )

  return (
    <CustomizeWrapper heading="Spacing">
      <SpacingContoller
        item={fontSize}
        items={FONT_SIZES}
        step={1}
        title="Font Size"
        onChange={(fz) =>
          dispatch(updateCustomization({ key: "spacing", value: { fontSize: fz } }))
        }
      />
      <SpacingContoller
        item={marginX}
        items={MARGIN_LIST}
        title="Left & Right Margin"
        onChange={(fz) => dispatch(updateCustomization({ key: "spacing", value: { marginX: fz } }))}
      />
      <SpacingContoller
        item={marginY}
        items={MARGIN_LIST}
        title="Top & Bottom Margin"
        onChange={(fz) => dispatch(updateCustomization({ key: "spacing", value: { marginY: fz } }))}
      />
      <SpacingContoller
        item={lineHeight}
        items={LINE_HEIGHT_LIST}
        step={0.15}
        title="Line Height"
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
