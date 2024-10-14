import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IInitialStateSettings, TypeThemeKey } from "@/shared/lib/types"

const initialState: IInitialStateSettings = {
  theme: "theme-red",
  autosave: {
    isEnabled: true,
    interval: 45
  },
  isResumeSavedEnabled: false
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<TypeThemeKey>) => {
      state.theme = action.payload
    },
    changeAutosaveInterval: (state, action: PayloadAction<{ interval: number }>) => {
      state.autosave.interval = action.payload.interval
    },
    changeAutosave: (state, action: PayloadAction<{ isEnabled: boolean }>) => {
      state.autosave.isEnabled = action.payload.isEnabled
    },
    changeIsResumeSavedEnabled: (state, action: PayloadAction<{ isEnabled: boolean }>) => {
      state.isResumeSavedEnabled = action.payload.isEnabled
    }
  }
})

export const { changeTheme, changeAutosave, changeAutosaveInterval, changeIsResumeSavedEnabled } =
  settingsSlice.actions
