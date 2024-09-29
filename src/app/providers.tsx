"use client"

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AxiosError } from "axios"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"
import React from "react"
import toast from "react-hot-toast"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { ToasterProvider } from "./toaster-provider"
import { persistor, store } from "@/app/store"

interface BaseResponse {
  message: string
}

const UNAUTHORIZED_MSG = "Unauthorized"
const DEFAULT_ERROR = "Something went wrong"

const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
  queryCache: new QueryCache({
    onError: (cause) => {
      const { response } = cause as AxiosError<BaseResponse>
      if (response && response.data.message !== UNAUTHORIZED_MSG) {
        toast.error(response?.data.message ?? DEFAULT_ERROR)
      }
    }
  }),
  mutationCache: new MutationCache({
    onError: (cause) => {
      const { response } = cause as AxiosError<BaseResponse>
      if (response && response.data.message !== UNAUTHORIZED_MSG) {
        toast.error(response?.data.message ?? DEFAULT_ERROR)
      }
    }
  })
})

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={client}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SessionProvider>{children}</SessionProvider>
          </ThemeProvider>
        </QueryClientProvider>
        <ToasterProvider />
      </PersistGate>
    </Provider>
  )
}

export { Providers }
