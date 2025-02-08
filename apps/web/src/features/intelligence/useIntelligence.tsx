"use client"

import { IMessage } from "@/shared/types"
import React, { use } from "react"

export const useIntelligence = () => use(IntelligenceContext)

interface IntelligenceContextProps {
  messages: IMessage[]
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>
}

interface IntelligenceProviderProps {
  defaultMessages?: IMessage[]
  children: React.ReactNode
}

const IntelligenceContext = React.createContext<IntelligenceContextProps>({
  messages: [],
  setMessages: () => {}
})

export const IntelligenceProvider = ({
  defaultMessages = [],
  children
}: IntelligenceProviderProps) => {
  const [messages, setMessages] = React.useState<IMessage[]>(defaultMessages)

  return (
    <IntelligenceContext.Provider value={{ messages, setMessages }}>
      {children}
    </IntelligenceContext.Provider>
  )
}
