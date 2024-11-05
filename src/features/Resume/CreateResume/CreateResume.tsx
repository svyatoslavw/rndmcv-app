"use client"

import { FilePlus2Icon } from "lucide-react"

import { ResumeTemplatesModal } from "./ResumeTemplateModal"
import { useCreateResume } from "./useCreateResume"
import { Button } from "@/shared/ui"

const CreateResume = () => {
  const { state, functions } = useCreateResume()

  return (
    <>
      <Button
        className="flex h-72 w-44 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-neutral-300 transition-all hover:border-primary hover:bg-inherit hover:text-primary"
        variant={"ghost"}
        onClick={() => functions.setIsModalOpen(true)}
      >
        <FilePlus2Icon size={44} strokeWidth={1.2} />
      </Button>
      <ResumeTemplatesModal isOpen={state.isModalOpen} setIsOpen={functions.setIsModalOpen} />
    </>
  )
}

export { CreateResume }
