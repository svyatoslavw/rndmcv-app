"use client"

import React from "react"

import { IntelligenceProvider } from "@/features"

const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  return <IntelligenceProvider>{children}</IntelligenceProvider>
}

export { ResumeProvider }
