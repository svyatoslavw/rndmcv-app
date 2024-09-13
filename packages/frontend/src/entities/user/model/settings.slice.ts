import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { TThemeKeys } from "@/shared/lib/hooks"
import { IInitialStateSettings } from "@/shared/lib/types"

const initialState: IInitialStateSettings = {
  theme: "theme-blue",
  language: "ua"
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<TThemeKeys>) => {
      state.theme = action.payload
    }
  }
})

export const { changeTheme } = settingsSlice.actions
