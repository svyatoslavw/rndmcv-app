"use client"

import { FilePlus2Icon } from "lucide-react"

import { ResumeTemplatesModal } from "./ResumeTemplateModal"
import { useCreateResume } from "./useCreateResume"
import { TemplatesProvider } from "./useTemplate"
import { Button, PricingModal } from "@/shared/ui"

const CreateResume = () => {
  const { state, functions } = useCreateResume()

  return (
    <TemplatesProvider>
      <>
        <Button
          onClick={() => functions.onShowTemplate(true)}
          variant={"ghost"}
          className="flex h-72 w-44 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-neutral-300 transition-all hover:opacity-50"
        >
          <FilePlus2Icon size={44} strokeWidth={1.2} />
        </Button>
        <ResumeTemplatesModal
          isOpen={state.isTemplateModalOpen}
          setIsOpen={functions.onShowTemplate}
          description="Select a template to get started."
        />
        <PricingModal
          isOpen={state.isPricingModalOpen}
          setIsOpen={functions.onShowPricing}
          description="To increase your space, you'll need to subscribe."
        />
      </>
    </TemplatesProvider>
  )
}

export { CreateResume }
