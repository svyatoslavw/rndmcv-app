import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export interface InitialState {
  name: string
  job: string
  email: string
  phone: string
  address: string
  date: string
  isEditing: boolean
}
export type ProfileKey = keyof Omit<InitialState, "isEditing">

export type UpdateContentAction = {
  key: ProfileKey
  value: string | Date
}

const initialState: InitialState = {
  name: "Sviatoslav Stepanov",
  job: "Frontend Developer",
  email: "test@gmail.com",
  phone: "+380999999999",
  address: "Kharkiv, Ukraine",
  date: new Date("01-01-2000").toISOString(),
  isEditing: false
}

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    updateContent: (state, action: PayloadAction<UpdateContentAction>) => {
      const { key, value } = action.payload
      if (key === "date" && value instanceof Date) {
        state.date = value.toISOString()
      } else {
        state[key] = value as string
      }
    },
    toggleEditing: (state) => {
      state.isEditing = !state.isEditing
    }
  }
})

export const { updateContent, toggleEditing } = contentSlice.actions
