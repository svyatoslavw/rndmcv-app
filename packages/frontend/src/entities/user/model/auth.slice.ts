import { createSlice } from "@reduxjs/toolkit"

import { loginThunk } from "./auth.actions"

interface AuthState {
  isLoading: boolean
}

const initialState: AuthState = {
  isLoading: false
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginThunk.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false
      })
  }
})
