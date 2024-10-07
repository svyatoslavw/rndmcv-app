import { combineReducers, configureStore } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { persistStore } from "redux-persist"

import { resumeSlice, statusSlice } from "@/entities/resume"
import { settingsSlice } from "@/entities/user"

const isClient = typeof window !== "undefined"

const combinedReducers = combineReducers({
  resume: resumeSlice.reducer,
  status: statusSlice.reducer,
  settings: settingsSlice.reducer
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

const extraArgument = { toast }

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      thunk: { extraArgument }
    })
  }
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ExtraArgument = typeof extraArgument

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
