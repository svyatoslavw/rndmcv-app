import { SettingsState } from "@/shared/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: SettingsState = {
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

export const { changeAutosave, changeAutosaveInterval, changeIsResumeSavedEnabled } =
  settingsSlice.actions
