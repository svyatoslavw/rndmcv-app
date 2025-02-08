import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { StatusState, UpdateStatusKeyAction } from "@/shared/types"

const initialState: StatusState = {
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
