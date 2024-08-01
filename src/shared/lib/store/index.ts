import { customizationSlice, resumeSlice, statusSlice } from "@/entities/resume"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

const combinedReducers = combineReducers({
  resume: resumeSlice.reducer,
  status: statusSlice.reducer,
  customization: customizationSlice.reducer
})

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["status"]
}

const mainReducer = persistReducer(persistConfig, combinedReducers)

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
