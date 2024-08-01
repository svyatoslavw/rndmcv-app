import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  IInitialStateCustomization,
  TColorSubtype,
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
    subtype: "accent",
    side: {
      left: {
        background: "#a78bfa",
        text: "#000000",
        accent: "#FFF32d"
      },
      right: {
        background: "#FFFFFF",
        text: "#000000",
        accent: "#FFF32d"
      }
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
      if (action.payload === "left" && state.columnsWidth.left + state.columnsWidth.right <= 100) {
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
    setColorSubtype(state, action: PayloadAction<{ subtype: TColorSubtype }>) {
      state.colors.subtype = action.payload.subtype
    },
    changeSideColors: (state, action: PayloadAction<UpdateColorsPayload>) => {
      state.colors.side = action.payload.side
    }
  }
})

export const {
  reorderColumns,
  setLayout,
  setColumnsWidth,
  setColorType,
  setColorSubtype,
  changeSideColors
} = customizationSlice.actions
