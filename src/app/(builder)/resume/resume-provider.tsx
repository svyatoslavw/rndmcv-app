"use client"

import { redirect } from "next/navigation"
import React from "react"

import { PUBLIC_URLS } from "@/shared/config"
import { useAppSelector } from "@/shared/lib/store"

const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const ids = useAppSelector((state) => state.resume.ids)

  if (!ids.length) {
    redirect(PUBLIC_URLS.HOME)
  }

  return (
    <div className="max-w-screen without-scrollbar mx-auto flex h-screen w-full bg-zinc-100">
      {children}
    </div>
  )
}

export { ResumeProvider }
