import { setSpacing } from "@/entities/resume"
import { CustomizeSpacing } from "@/features"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"

const FONT_SIZES = [0, 4, 8, 12, 16, 20, 24]
const MARGIN_LIST = [8, 12, 16, 20, 24, 28, 32]
const LINE_HEIGHT_LIST = [1, 1.15, 1.3, 1.45, 1.6, 1.75, 1.9]

const CustomizeSpacingList = () => {
  const dispatch = useAppDispatch()
  const fontSize = useAppSelector((state) => state.customization.spacing.fontSize)
  const marginX = useAppSelector((state) => state.customization.spacing.marginX)
  const marginY = useAppSelector((state) => state.customization.spacing.marginY)
  const lineHeight = useAppSelector((state) => state.customization.spacing.lineHeight)

  return (
    <div className="mt-5 flex flex-col gap-9 rounded-xl bg-white p-8">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Spacing</h2>
        <div className="flex flex-col gap-8">
          <CustomizeSpacing
            title="Font Size"
            item={fontSize}
            items={FONT_SIZES}
            onChange={(value) => dispatch(setSpacing({ key: "fontSize", value }))}
          />
          <CustomizeSpacing
            title="Left & Right Margin"
            item={marginX}
            items={MARGIN_LIST}
            onChange={(value) => dispatch(setSpacing({ key: "marginX", value }))}
          />
          <CustomizeSpacing
            title="Top & Bottom Margin"
            item={marginY}
            items={MARGIN_LIST}
            onChange={(value) => dispatch(setSpacing({ key: "marginY", value }))}
          />
          <CustomizeSpacing
            title="Line Height"
            item={lineHeight}
            items={LINE_HEIGHT_LIST}
            step={0.15}
            onChange={(value) =>
              dispatch(setSpacing({ key: "lineHeight", value: Math.round(value * 100) / 100 }))
            }
          />
        </div>
      </div>
    </div>
  )
}

export { CustomizeSpacingList }
