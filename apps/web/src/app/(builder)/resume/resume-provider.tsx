"use client"

import React from "react"

import { IntelligenceProvider } from "@/features"

const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <IntelligenceProvider>
      <div className="max-w-screen without-scrollbar mx-auto flex h-screen w-full">{children}</div>
    </IntelligenceProvider>
  )
}

export { ResumeProvider }
