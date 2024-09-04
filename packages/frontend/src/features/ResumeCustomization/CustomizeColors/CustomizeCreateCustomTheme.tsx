import { useMemo, useState } from "react"

import { CustomizeChangeColorItem, TColorSides, updateCustomization } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { debounce } from "@/shared/lib/utils"

const CustomizeCreateCustomTheme = ({ type }: { type: "basic" | "advanced" }) => {
  const dispatch = useAppDispatch()

  const { left, right } = useAppSelector((state) => state.customization.colors.side)

  const { accent: leftAccent, text: leftText, background: leftBackground } = left
  const { accent: rightAccent, text: rightText, background: rightBackground } = right

  const [mode, setMode] = useState({
    textl: false,
    textr: false,
    backgroundl: false,
    backgroundr: false,
    accentl: false,
    accentr: false
  })

  const onChangeColor = useMemo(
    () =>
      debounce((side: TColorSides) => {
        dispatch(updateCustomization({ key: "colors", value: { side } }))
      }, 300),
    [dispatch]
  )

  const updateModeVisible = (value: keyof typeof mode) => {
    setMode({
      textl: false,
      textr: false,
      backgroundl: false,
      backgroundr: false,
      accentl: false,
      accentr: false,
      [value]: !mode[value]
    })
  }

  return (
    <div>
      {type === "basic" ? (
        <div className="grid grid-cols-3 place-content-evenly items-start">
          <CustomizeChangeColorItem
            isLeft
            left={left}
            right={right}
            value="text"
            isModeVisible={mode.textl}
            updateModeVisible={() => updateModeVisible("textl")}
            onChangeColor={onChangeColor}
          />

          <CustomizeChangeColorItem
            isLeft
            left={left}
            right={right}
            value="background"
            isModeVisible={mode.backgroundl}
            updateModeVisible={() => updateModeVisible("backgroundl")}
            onChangeColor={onChangeColor}
          />
          <CustomizeChangeColorItem
            isLeft
            left={left}
            right={right}
            value="accent"
            isModeVisible={mode.accentl}
            updateModeVisible={() => updateModeVisible("accentl")}
            onChangeColor={onChangeColor}
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 place-content-evenly items-start">
          <CustomizeChangeColorItem
            isLeft
            left={left}
            right={right}
            value="text"
            isModeVisible={mode.textl}
            updateModeVisible={() => updateModeVisible("textl")}
            onChangeColor={onChangeColor}
          />

          <CustomizeChangeColorItem
            isLeft
            left={left}
            right={right}
            value="background"
            isModeVisible={mode.backgroundl}
            updateModeVisible={() => updateModeVisible("backgroundl")}
            onChangeColor={onChangeColor}
          />
          <CustomizeChangeColorItem
            isLeft
            left={left}
            right={right}
            value="accent"
            isModeVisible={mode.accentl}
            updateModeVisible={() => updateModeVisible("accentl")}
            onChangeColor={onChangeColor}
          />

          <CustomizeChangeColorItem
            isAdvanced
            left={left}
            right={right}
            value="text"
            isModeVisible={mode.textr}
            updateModeVisible={() => updateModeVisible("textr")}
            onChangeColor={onChangeColor}
          />

          <CustomizeChangeColorItem
            isAdvanced
            left={left}
            right={right}
            value="background"
            isModeVisible={mode.backgroundr}
            updateModeVisible={() => updateModeVisible("backgroundr")}
            onChangeColor={onChangeColor}
          />
          <CustomizeChangeColorItem
            isAdvanced
            left={left}
            right={right}
            value="accent"
            isModeVisible={mode.accentr}
            updateModeVisible={() => updateModeVisible("accentr")}
            onChangeColor={onChangeColor}
          />
        </div>
      )}
    </div>
  )
}

export { CustomizeCreateCustomTheme }
