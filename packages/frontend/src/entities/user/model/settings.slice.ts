import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { TThemeKeys } from "@/shared/lib/hooks"
import { IInitialStateSettings } from "@/shared/lib/types"

const initialState: IInitialStateSettings = {
  theme: "theme-blue",
  autosave: {
    isEnabled: false,
    interval: 45
  }
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<TThemeKeys>) => {
      state.theme = action.payload
    },
    changeAutosaveInterval: (state, action: PayloadAction<{ interval: number }>) => {
      state.autosave.interval = action.payload.interval
    },
    changeAutosave: (state, action: PayloadAction<{ isEnabled: boolean }>) => {
      state.autosave.isEnabled = action.payload.isEnabled
    }
  }
})

export const { changeTheme, changeAutosave, changeAutosaveInterval } = settingsSlice.actions
