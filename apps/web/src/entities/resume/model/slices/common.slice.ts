import type { PayloadAction } from "@reduxjs/toolkit"

import { createSlice } from "@reduxjs/toolkit"

import { CommonState } from "../../domain"

const initialState: CommonState = {
  ids: [],
  selectedId: null
}

export const commonSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    createId: (state, action: PayloadAction<{ id: string }>) => {
      if (!state.ids.find((it) => it === action.payload.id)) {
        state.ids = [...state.ids, action.payload.id]
      }
    },
    deleteSelectedId: (state, action: PayloadAction<{ id: string }>) => {
      state.ids = state.ids.filter((it) => it !== action.payload.id)
      state.selectedId = state.ids[0]
    },
    setSelectedId: (state, action: PayloadAction<{ id: string }>) => {
      if (!state.ids.includes(action.payload.id)) {
        state.ids = [...state.ids, action.payload.id]
      }
      state.selectedId = action.payload.id
    }
  }
})

export const { createId, setSelectedId, deleteSelectedId } = commonSlice.actions
