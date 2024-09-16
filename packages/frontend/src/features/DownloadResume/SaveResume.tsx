"use client"

import { LoaderIcon, SaveAllIcon } from "lucide-react"

import { useAppSelector } from "@/app/store"
import { selectResume, useUpdateResumeMutation } from "@/entities/resume"
import { Button } from "@/shared/ui"

const SaveResume = () => {
  const resume = useAppSelector(selectResume)

  const [updateResume, { isLoading }] = useUpdateResumeMutation()

  const onClick = () => updateResume(resume)

  return (
    <Button onClick={onClick} className="gap-2" variant={"outline"}>
      {isLoading ? <LoaderIcon size={16} className="animate-spin" /> : <SaveAllIcon size={16} />}
      Save
    </Button>
  )
}

export { SaveResume }
