"use client"

import { FilePlus2Icon } from "lucide-react"

import { createResume } from "@/entities/resume/services/create-resume"
import { getStoreFunctions } from "@/entities/resume/services/get-store-functions"
import { Button } from "@/shared/ui"

const CreateResume = () => {
  const { dataStore, dispatch } = getStoreFunctions((state) => state.resume.ids)

  return (
    <Button
      className="flex h-72 w-44 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-neutral-300 transition-all hover:border-primary hover:bg-inherit hover:text-primary"
      variant={"ghost"}
      onClick={() => createResume(dataStore.length, dispatch)}
    >
      <FilePlus2Icon size={44} strokeWidth={1.2} />
    </Button>
  )
}

export { CreateResume }
