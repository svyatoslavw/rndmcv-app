"use client"

import { DownloadResume, SaveResume } from "@/features"

const ResumeHeader = () => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between rounded-xl bg-white p-5 shadow-md">
      <h3 className="text-xl font-bold">Resume Name</h3>
      <div className="flex gap-2">
        <SaveResume />
        <DownloadResume />
      </div>
    </div>
  )
}

export { ResumeHeader }
