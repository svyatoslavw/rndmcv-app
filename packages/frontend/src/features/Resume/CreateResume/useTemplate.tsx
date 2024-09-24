"use client"

import React from "react"

import type { ICustomization } from "@/shared/lib/types"

interface ITemplateContext {
  template: ICustomization | null
  setTemplate: (template: ICustomization | null) => void
}
interface ITemplatesProvider {
  children: React.ReactNode
}

export const useTemplate = () => React.useContext(TemplatesContext)

export const TemplatesContext = React.createContext<ITemplateContext>({
  template: null,
  setTemplate: () => {}
})

export const TemplatesProvider: React.FC<ITemplatesProvider> = ({ children }) => {
  const [templateState, setTemplateState] = React.useState<ICustomization | null>(null)

  const setTemplate = (newTemplate: ICustomization | null) => {
    setTemplateState(newTemplate)
  }

  const value = React.useMemo(() => ({ template: templateState, setTemplate }), [templateState])

  return <TemplatesContext.Provider value={value}>{children}</TemplatesContext.Provider>
}
