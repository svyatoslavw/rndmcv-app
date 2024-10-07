"use client"

import { FilePlus2Icon } from "lucide-react"

import { ResumeTemplatesModal } from "./ResumeTemplateModal"
import { useCreateResume } from "./useCreateResume"
import { TemplatesProvider } from "./useTemplate"
import { Button } from "@/shared/ui"

const CreateResume = () => {
  const { state, functions } = useCreateResume()

  const onShow = () => functions.onShowTemplate(true)

  return (
    <TemplatesProvider>
      <Button
        onClick={onShow}
        variant={"ghost"}
        className="flex h-72 w-44 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-neutral-300 transition-all hover:opacity-50"
      >
        <FilePlus2Icon size={44} strokeWidth={1.2} />
      </Button>
      <ResumeTemplatesModal
        isOpen={state.isTemplateModalOpen}
        setIsOpen={functions.onShowTemplate}
      />
    </TemplatesProvider>
  )
}

export { CreateResume }
