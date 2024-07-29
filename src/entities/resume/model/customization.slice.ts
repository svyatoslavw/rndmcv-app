import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TBlockOrder = "person" | "education" | "experience" | "projects" | "skills"

export type TLayoutPosition = {
  position: "top" | "left" | "right"
  class: "flex-col" | "flex-row" | "flex-row-reverse"
}

type UpdateColumnsPayload = {
  left: TBlockOrder[]
  right: TBlockOrder[]
}

type UpdateColumnsWidthPayload = "left" | "right"

type IInitialStateCustomization = {
  layout: TLayoutPosition
  columns: {
    left: TBlockOrder[]
    right: TBlockOrder[]
  }
  columnsWidth: {
    left: number
    right: number
  }
}

const initialState: IInitialStateCustomization = {
  layout: { position: "left", class: "flex-row" },
  columns: {
    left: ["education"],
    right: ["projects", "experience", "skills"]
  },
  columnsWidth: {
    left: 50,
    right: 50
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
    }
  }
})

export const { reorderColumns, setLayout, setColumnsWidth } = customizationSlice.actions
