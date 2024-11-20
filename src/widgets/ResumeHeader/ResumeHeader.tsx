"use client"

import { SquarePenIcon } from "lucide-react"

import { DownloadResume, SaveResume } from "@/features"

const ResumeHeader = () => {
  return (
    <section className="sticky top-0 z-10 flex items-center justify-between rounded-lg bg-background p-5 shadow-md dark:shadow-neutral-800">
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold">Resume Name</h3>
        <SquarePenIcon className="cursor-pointer" size={16} />
      </div>
      <div className="flex gap-2">
        <SaveResume />
        <DownloadResume />
      </div>
    </section>
  )
}

export { ResumeHeader }
