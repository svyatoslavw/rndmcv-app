import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TBlockOrder = "person" | "education" | "experience" | "projects" | "skills"

export type TLayoutPosition = {
  position: "top" | "left" | "right"
  class: "flex-col" | "flex-row" | "flex-row-reverse"
}

type IInitialStateCustomization = {
  layout: TLayoutPosition
  blocks: TBlockOrder[]
}

const initialState: IInitialStateCustomization = {
  layout: { position: "left", class: "flex-row" },
  blocks: ["person", "education", "experience", "projects", "skills"]
}

export const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<TLayoutPosition>) => {
      state.layout = action.payload
    },
    reorderBlocks: (state, action: PayloadAction<TBlockOrder[]>) => {
      state.blocks = action.payload
    }
  }
})

export const { reorderBlocks, setLayout } = customizationSlice.actions
