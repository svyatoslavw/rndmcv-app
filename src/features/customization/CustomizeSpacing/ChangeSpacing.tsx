import { SpacingContoller } from "./SpacingContoller"

import { selectCustomizationResume, useCustomizationActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { TypeSpacing } from "@/shared/types"

const FONT_SIZES = [4, 5, 6, 7, 8, 9, 10]
const MARGIN_LIST = [8, 12, 16, 20, 24, 28, 32]
const LINE_HEIGHT_LIST = [1, 1.15, 1.3, 1.45, 1.6, 1.75, 1.9]

const ChangeSpacing = () => {
  const { updateCustomization } = useCustomizationActions()

  const { fontSize, marginX, marginY, lineHeight } = useAppSelector(
    selectCustomizationResume("spacing")
  )

  const onChangeSpacing = (key: keyof TypeSpacing, value: number) =>
    updateCustomization({ key: "spacing", value: { [key]: value } })

  return (
    <>
      <SpacingContoller
        item={fontSize}
        items={FONT_SIZES}
        step={1}
        title="Font Size"
        onChange={(fz) => onChangeSpacing("fontSize", fz)}
      />
      <SpacingContoller
        item={marginX}
        items={MARGIN_LIST}
        title="Left & Right Margin"
        onChange={(mx) => onChangeSpacing("marginX", mx)}
      />
      <SpacingContoller
        item={marginY}
        items={MARGIN_LIST}
        title="Top & Bottom Margin"
        onChange={(my) => onChangeSpacing("marginY", my)}
      />
      <SpacingContoller
        item={lineHeight}
        items={LINE_HEIGHT_LIST}
        step={0.15}
        title="Line Height"
        onChange={(lh) => onChangeSpacing("lineHeight", Math.round(lh * 100) / 100)}
      />
    </>
  )
}

export { ChangeSpacing }
