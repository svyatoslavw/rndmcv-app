import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IInitialStateStatus, UpdateStatusKeyAction } from "@/shared/lib/types"

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
