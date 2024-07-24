import { contentSlice } from "@/entities/resume/model/content.slice"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"

const combinedReducers = combineReducers({
  content: contentSlice.reducer
})

export const store = configureStore({
  reducer: combinedReducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
