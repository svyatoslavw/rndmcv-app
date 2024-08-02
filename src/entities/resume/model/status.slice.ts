import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { IInitialStateStatus, UpdateStatusKeyAction } from "./status.types"

const initialState: IInitialStateStatus = {
  isEditing: null,
  isCreating: null
}

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    toggleStatus: (state, action: PayloadAction<UpdateStatusKeyAction>) => {
      const { key, content } = action.payload
      state[key] = state[key] === content ? null : content
    }
  }
})

export const { toggleStatus } = statusSlice.actions
