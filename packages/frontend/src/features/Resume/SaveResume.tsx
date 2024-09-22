"use client"

import { LoaderIcon, SaveAllIcon } from "lucide-react"

import { useSaveResume } from "./useSaveResume"
import { Button } from "@/shared/ui"

const SaveResume = () => {
  const { isLoading, onSave } = useSaveResume()

  return (
    <Button onClick={onSave} className="gap-2" variant={"outline"}>
      {isLoading ? <LoaderIcon size={16} className="animate-spin" /> : <SaveAllIcon size={16} />}
      Save
    </Button>
  )
}

export { SaveResume }
