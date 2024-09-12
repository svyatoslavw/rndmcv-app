"use client"

import { FilePenIcon } from "lucide-react"

import { SaveResume } from "@/features"
import { Button } from "@/shared/ui"

const ResumeHeader = () => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between rounded-xl bg-white p-5 shadow-md">
      <h3 className="text-xl font-bold">Resume</h3>
      <div className="flex gap-2">
        <Button className="gap-2" variant={"outline"}>
          <FilePenIcon size={16} />
          Added to draft
        </Button>
        <SaveResume />
      </div>
    </div>
  )
}

export { ResumeHeader }
