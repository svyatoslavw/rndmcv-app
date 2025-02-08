"use client"

import { CheckIcon, SquarePenIcon } from "lucide-react"

import { DownloadResume, SaveResume } from "@/features"
import { Button, Input } from "@rndm/ui/components"
import { useState } from "react"

const ResumeHeader = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState("")

  return (
    <section className="bg-background sticky top-0 z-10 flex items-center justify-between rounded-t-lg p-5">
      <div className="flex items-center gap-2">
        {isEditing ? (
          <div className="flex items-center gap-2">
            <Input value={value} onChange={(e) => setValue(e.target.value)} className="w-full" />
            <Button onClick={() => setIsEditing(false)} variant="default" size="icon">
              <CheckIcon size={16} />
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2" onClick={() => setIsEditing(true)}>
            <h3 className="hover:text-foreground/60 text-xl font-bold transition">Resume Name</h3>
            <SquarePenIcon className="cursor-pointer" size={16} />
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <SaveResume />

        <DownloadResume />
      </div>
    </section>
  )
}

export { ResumeHeader }
