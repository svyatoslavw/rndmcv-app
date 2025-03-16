"use client"

import { ChangeResumeName, DownloadResume, SaveResume } from "@/features"

const ResumeHeader = () => {
  return (
    <section className="bg-background dark:border-secondary flex items-center justify-between border-b p-4">
      <ChangeResumeName />
      <div className="flex gap-2">
        <SaveResume />

        <DownloadResume />
      </div>
    </section>
  )
}

export { ResumeHeader }
