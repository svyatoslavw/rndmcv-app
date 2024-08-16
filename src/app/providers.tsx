"use client"

import React from "react"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { persistor, store } from "@/shared/lib/store"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
        <Toaster
          toastOptions={{
            iconTheme: { primary: "#7c3aed", secondary: "white" },
            className: "text-sm"
          }}
        />
      </PersistGate>
    </Provider>
  )
}

export { Providers }
