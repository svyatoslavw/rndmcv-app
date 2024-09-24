"use client"

import React from "react"

export type Credential = "loginOrEmail" | "phone"

interface ICredentialsContext {
  credential: string
  setCredential: (credential: string) => void
}
interface ICredentialsProvider {
  children: React.ReactNode
}

export const useCredentials = () => React.useContext(CredentialsContext)

export const CredentialsContext = React.createContext<ICredentialsContext>({
  credential: "",
  setCredential: () => {}
})

export const CredentialsProvider: React.FC<ICredentialsProvider> = ({ children }) => {
  const [credential, setCredentialState] = React.useState<string>("")

  const setCredential = (newCredential: string) => {
    setCredentialState(newCredential)
  }

  const value = React.useMemo(() => ({ credential, setCredential }), [credential])

  return <CredentialsContext.Provider value={value}>{children}</CredentialsContext.Provider>
}
