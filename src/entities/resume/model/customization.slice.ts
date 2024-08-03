import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import {
  IInitialStateCustomization,
  TApplyAccent,
  TColorMode,
  TColorType,
  TLayoutPosition,
  TSpacing,
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
    mode: "basic",
    type: "accent",
    applyAccent: {
      name: true,
      headings: false,
      headingsLines: true,
      headerIcons: false,
      dots: false,
      dates: false,
      linkIcons: false
    },
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
  },
  spacing: {
    fontSize: 12,
    lineHeight: 1.45,
    marginX: 20,
    marginY: 20
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
    setColorMode(state, action: PayloadAction<{ mode: TColorMode }>) {
      state.colors.mode = action.payload.mode
    },
    changeSideColors: (state, action: PayloadAction<UpdateColorsPayload>) => {
      state.colors.side = action.payload.side
    },
    changeSideAccentColor: (state, action: PayloadAction<{ color: string }>) => {
      state.colors.side.left.accent = action.payload.color
      state.colors.side.right.accent = action.payload.color
    },
    toggleAccentVisibility: (state, action: PayloadAction<{ key: keyof TApplyAccent }>) => {
      state.colors.applyAccent[action.payload.key] = !state.colors.applyAccent[action.payload.key]
    },
    setSpacing: (state, action: PayloadAction<{ key: keyof TSpacing; value: number }>) => {
      state.spacing[action.payload.key] = action.payload.value
    }
  }
})

export const {
  reorderColumns,
  setLayout,
  setColumnsWidth,
  setColorType,
  setColorMode,
  changeSideColors,
  changeSideAccentColor,
  toggleAccentVisibility,
  setSpacing
} = customizationSlice.actions
