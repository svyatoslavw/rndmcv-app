"use client"

import { LoaderIcon, SaveAllIcon } from "lucide-react"

import { useSaveResume } from "./useSaveResume"
import { useProfile } from "@/entities/user"
import { Button } from "@/shared/ui"

const SaveResume = () => {
  const { profile } = useProfile()
  const { isLoading, onSave } = useSaveResume()

  return (
    <Button disabled={isLoading || !profile} onClick={onSave} className="gap-2" variant={"outline"}>
      {isLoading ? <LoaderIcon size={16} className="animate-spin" /> : <SaveAllIcon size={16} />}
      {profile ? "Save" : "Save to profile"}
    </Button>
  )
}

export { SaveResume }
