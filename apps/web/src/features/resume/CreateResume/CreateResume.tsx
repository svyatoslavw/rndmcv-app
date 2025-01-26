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
      className="rcol relative flex h-72 w-44 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-neutral-300 bg-background transition-all hover:border-primary hover:text-primary"
      variant={"ghost"}
      onClick={() => functions.createResume()}
    >
      {state.isLoading ? <SpinnerIcon /> : <FilePlus2Icon size={44} strokeWidth={1.2} />}
    </Button>
  )
}

export { CreateResume }
