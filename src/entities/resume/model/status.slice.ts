import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import type { IInitialStateStatus, TThemeKeys, UpdateStatusKeyAction } from "./status.types"

const initialState: IInitialStateStatus = {
  isEditing: null,
  isCreating: null,
  theme: "theme-violet"
}

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    toggleStatus: (state, action: PayloadAction<UpdateStatusKeyAction>) => {
      const { key, content } = action.payload
      state[key] = state[key] === content ? null : content
    },
    changeTheme: (state, action: PayloadAction<{ theme: TThemeKeys }>) => {
      state.theme = action.payload.theme
    }
  }
})

export const { toggleStatus, changeTheme } = statusSlice.actions
