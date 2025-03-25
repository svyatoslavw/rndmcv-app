"use client"

import { ChangeResumeName, DownloadResume, SaveResume } from "@/features"

const ResumeHeader = () => {
  return (
    <section className="bg-background sticky top-0 z-10 flex items-center justify-between rounded-t-lg p-4">
      <ChangeResumeName />
      <div className="flex gap-2">
        <SaveResume />

        <DownloadResume />
      </div>
    </section>
  )
}

export { ResumeHeader }
