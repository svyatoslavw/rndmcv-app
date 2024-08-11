import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import {
  IInitialStateCustomization,
  TApplyAccent,
  TColorMode,
  TColorType,
  THeadingValuePayload,
  TPosition,
  UpdateColorsPayload,
  UpdateColumnsPayload,
  UpdateColumnsWidthPayload,
  UpdateCustomizationPayload,
  UpdateHeadingPayload,
  UpdateSpacingPayload
} from "./customization.types"

const initialState: IInitialStateCustomization = {
  layout: {
    layout: { pos: "left", class: "flex-row" },
    columns: {
      left: ["education"],
      right: ["projects", "experience", "skills"]
    },
    columnsWidth: {
      left: 50,
      right: 50
    }
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
        background: "#e5e7eb",
        text: "#000000",
        accent: "#a855f7"
      },
      right: {
        background: "#FFFFFF",
        text: "#000000",
        accent: "#a855f7"
      }
    }
  },
  spacing: {
    fontSize: 12,
    lineHeight: 1.45,
    marginX: 20,
    marginY: 20
  },
  heading: {
    size: 20,
    icons: "outline",
    style: "shortUnderline"
  },
  name: {
    size: 12,
    isBold: true,
    font: "default"
  },
  job: {
    size: 6,
    isItalic: false
  }
}

export const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    reorderColumns: (state, action: PayloadAction<UpdateColumnsPayload>) => {
      state.layout.columns.left = action.payload.left
      state.layout.columns.right = action.payload.right
    },
    setLayout: (state, action: PayloadAction<TPosition>) => {
      state.layout.layout = action.payload
    },
    setColumnsWidth: (state, action: PayloadAction<UpdateColumnsWidthPayload>) => {
      if (action.payload === "left") {
        state.layout.columnsWidth.left += 1
        state.layout.columnsWidth.right -= 1
      } else {
        state.layout.columnsWidth.left -= 1
        state.layout.columnsWidth.right += 1
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
    setSpacing: (state, action: PayloadAction<UpdateSpacingPayload>) => {
      state.spacing[action.payload.key] = action.payload.value
    },
    setHeadingStyle: (state, action: PayloadAction<UpdateHeadingPayload>) => {
      ;(state.heading[action.payload.key] as THeadingValuePayload) = action.payload.value
    },
    updateCustomization: (state, action: PayloadAction<UpdateCustomizationPayload>) => {
      const { key, value } = action.payload
      switch (key) {
        case "layout":
          state.layout = { ...state.layout, ...value }
          break
        case "colors":
          state.colors = { ...state.colors, ...value }
          break
        case "spacing":
          state.spacing = { ...state.spacing, ...value }
          break
        case "heading":
          state.heading = { ...state.heading, ...value }
          break
        case "name":
          state.name = { ...state.name, ...value }
          break
        case "job":
          state.job = { ...state.job, ...value }
          break
        default:
          break
      }
    }
  }
})

export const { reorderColumns, toggleAccentVisibility, updateCustomization } =
  customizationSlice.actions
