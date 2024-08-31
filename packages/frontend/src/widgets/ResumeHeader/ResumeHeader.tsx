"use client"

import { FileDownIcon, Loader2Icon } from "lucide-react"

import { useSaveResume } from "@/features"
import { Button } from "@/shared/ui"

const ResumeHeader = () => {
  const { isPending, onSave } = useSaveResume()

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between rounded-xl bg-white p-5 shadow-md">
      <h3 className="text-xl font-bold">Resume</h3>
      <Button onClick={onSave} className="gap-2">
        {isPending ? (
          <>
            Downloading...
            <Loader2Icon size={16} className="animate-spin" />
          </>
        ) : (
          <>
            Download
            <FileDownIcon size={16} />
          </>
        )}
      </Button>
    </div>
  )
}

export { ResumeHeader }
