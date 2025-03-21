"use client"

import { Button } from "@rndm/ui/components"
import { SpinnerIcon } from "@rndm/ui/icons"
import { FilePlus2Icon } from "lucide-react"

import { useCreateResume } from "./useCreateResume"

const CreateResume = () => {
  const { functions, state } = useCreateResume()

  return (
    <Button
      disabled={state.isLoading}
      className="bg-background hover:border-primary hover:text-primary relative flex h-[425.3px] w-44 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-neutral-300 transition-all"
      variant={"ghost"}
      onClick={() => functions.createResume()}
    >
      {state.isLoading ? <SpinnerIcon /> : <FilePlus2Icon size={44} strokeWidth={1.2} />}
    </Button>
  )
}

export { CreateResume }
