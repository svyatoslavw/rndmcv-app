"use client"

import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

import { PUBLIC_URLS } from "@/shared/config"
import { useAppSelector } from "@/shared/lib/store"

const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const ids = useAppSelector((state) => state.resume.ids)
  const { push } = useRouter()

  useEffect(() => {
    if (!ids.length) {
      push(PUBLIC_URLS.HOME)
    }
  }, [ids])

  return (
    <div className="max-w-screen without-scrollbar mx-auto flex h-screen w-full">{children}</div>
  )
}

export { ResumeProvider }
