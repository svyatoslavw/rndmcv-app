"use client"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"
import React from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { ToasterProvider } from "./toaster-provider"

import { persistor, store } from "@/app/store"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <SessionProvider>{children}</SessionProvider>
          <ToasterProvider />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export { Providers }
