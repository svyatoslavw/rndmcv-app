"use client"

import React from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { ToasterProvider } from "./toaster-provider"
import { persistor, store } from "@/app/store"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
        <ToasterProvider />
      </PersistGate>
    </Provider>
  )
}

export { Providers }
