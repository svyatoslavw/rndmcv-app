"use client"

import { redirect } from "next/navigation"
import React from "react"

import { useAppSelector } from "@/app/store"
import { PUBLIC_URL } from "@/shared/config"

const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const resumes = useAppSelector((state) => state.resume.resumes)

  if (!resumes.length) {
    redirect(PUBLIC_URL.home())
  }

  return (
    <div className="max-w-screen without-scrollbar mx-auto flex h-screen w-full bg-zinc-100">
      {children}
    </div>
  )
}

export { ResumeProvider }
