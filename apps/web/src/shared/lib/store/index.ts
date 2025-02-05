import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { persistStore } from "redux-persist"

import { statusSlice } from "@/entities/resume"
import { resumeSlice } from "@/entities/resume/model/slices/resume.slice"
import { settingsSlice } from "@/entities/user"

const isClient = typeof window !== "undefined"

const combinedReducers = combineReducers({
  status: statusSlice.reducer,
  settings: settingsSlice.reducer,
  resume: resumeSlice.reducer
})

export const rootActions = {
  ...statusSlice.actions,
  ...settingsSlice.actions,
  ...resumeSlice.actions
}

let mainReducer = combinedReducers

if (isClient) {
  const { persistReducer } = require("redux-persist")
  const storage = require("redux-persist/lib/storage").default

  const persistConfig = {
    key: "root",
    storage,
    blacklist: ["status"]
  }

  mainReducer = persistReducer(persistConfig, combinedReducers)
}

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false })
  }
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
