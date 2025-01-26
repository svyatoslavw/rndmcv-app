import { useMemo, useState } from "react"

import {
  ResumeDomain,
  SelectCustomColor,
  selectCustomizationResume,
  useCustomizationActions
} from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { debounce } from "@/shared/lib/utils"

const CreateCustomTheme = ({ type }: { type: ResumeDomain.ColorMode }) => {
  const { updateCustomization } = useCustomizationActions()

  const {
    side: { left, right }
  } = useAppSelector(selectCustomizationResume("colors"))

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
      debounce((side: ResumeDomain.ColorSides) => {
        updateCustomization({ key: "colors", value: { side } })
      }, 300),
    []
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
          <SelectCustomColor
            isLeft
            isModeVisible={mode.textl}
            left={left}
            right={right}
            updateModeVisible={() => updateModeVisible("textl")}
            value="text"
            onChangeColor={onChangeColor}
          />

          <SelectCustomColor
            isLeft
            isModeVisible={mode.backgroundl}
            left={left}
            right={right}
            updateModeVisible={() => updateModeVisible("backgroundl")}
            value="background"
            onChangeColor={onChangeColor}
          />
          <SelectCustomColor
            isLeft
            isModeVisible={mode.accentl}
            left={left}
            right={right}
            updateModeVisible={() => updateModeVisible("accentl")}
            value="accent"
            onChangeColor={onChangeColor}
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 place-content-evenly items-start">
          <SelectCustomColor
            isLeft
            isModeVisible={mode.textl}
            left={left}
            right={right}
            updateModeVisible={() => updateModeVisible("textl")}
            value="text"
            onChangeColor={onChangeColor}
          />

          <SelectCustomColor
            isLeft
            isModeVisible={mode.backgroundl}
            left={left}
            right={right}
            updateModeVisible={() => updateModeVisible("backgroundl")}
            value="background"
            onChangeColor={onChangeColor}
          />
          <SelectCustomColor
            isLeft
            isModeVisible={mode.accentl}
            left={left}
            right={right}
            updateModeVisible={() => updateModeVisible("accentl")}
            value="accent"
            onChangeColor={onChangeColor}
          />

          <SelectCustomColor
            isAdvanced
            isModeVisible={mode.textr}
            left={left}
            right={right}
            updateModeVisible={() => updateModeVisible("textr")}
            value="text"
            onChangeColor={onChangeColor}
          />

          <SelectCustomColor
            isAdvanced
            isModeVisible={mode.backgroundr}
            left={left}
            right={right}
            updateModeVisible={() => updateModeVisible("backgroundr")}
            value="background"
            onChangeColor={onChangeColor}
          />
          <SelectCustomColor
            isAdvanced
            isModeVisible={mode.accentr}
            left={left}
            right={right}
            updateModeVisible={() => updateModeVisible("accentr")}
            value="accent"
            onChangeColor={onChangeColor}
          />
        </div>
      )}
    </div>
  )
}

export { CreateCustomTheme }

