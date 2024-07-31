import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type {
  IInitialStateCustomization,
  TColorType,
  TLayoutPosition,
  UpdateColorsPayload,
  UpdateColumnsPayload,
  UpdateColumnsWidthPayload
} from "./customization.types"

const initialState: IInitialStateCustomization = {
  layout: { position: "left", class: "flex-row" },
  columns: {
    left: ["education"],
    right: ["projects", "experience", "skills"]
  },
  columnsWidth: {
    left: 50,
    right: 50
  },
  colors: {
    type: "basic",
    color: {
      left: "#c2c2c2",
      right: "#FFFFFF"
    }
  }
}

export const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<TLayoutPosition>) => {
      state.layout = action.payload
    },
    reorderColumns: (state, action: PayloadAction<UpdateColumnsPayload>) => {
      state.columns.left = action.payload.left
      state.columns.right = action.payload.right
    },
    setColumnsWidth: (state, action: PayloadAction<UpdateColumnsWidthPayload>) => {
      if (action.payload === "left") {
        state.columnsWidth.left += 1
        state.columnsWidth.right -= 1
      } else {
        state.columnsWidth.left -= 1
        state.columnsWidth.right += 1
      }
    },
    setColorType: (state, action: PayloadAction<{ type: TColorType }>) => {
      state.colors.type = action.payload.type
    },
    setColor: (state, action: PayloadAction<UpdateColorsPayload>) => {
      state.colors.color = action.payload.color
    }
  }
})

export const { reorderColumns, setLayout, setColumnsWidth, setColorType, setColor } =
  customizationSlice.actions
