import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { persistStore } from "redux-persist"

import { customizationSlice, resumeSlice, statusSlice } from "@/entities/resume"
import { userApi } from "@/entities/user"

const isClient = typeof window !== "undefined"

const combinedReducers = combineReducers({
  resume: resumeSlice.reducer,
  status: statusSlice.reducer,
  customization: customizationSlice.reducer,
  [userApi.reducerPath]: userApi.reducer
})

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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(userApi.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
