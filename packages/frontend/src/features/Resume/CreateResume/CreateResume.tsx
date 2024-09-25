"use client"

import { FilePlus2Icon } from "lucide-react"

import { ResumeTemplatesModal } from "./ResumeTemplateModal"
import { useCreateResume } from "./useCreateResume"
import { TemplatesProvider } from "./useTemplate"
import { useAppSelector } from "@/app/store"
import { canAddMoreResumes, useProfile } from "@/entities/user"
import { Button } from "@/shared/ui"
import { PricingModal } from "@/widgets"

const CreateResume = () => {
  const resumes = useAppSelector((state) => state.resume.resumes)
  const { state, functions } = useCreateResume()
  const { profile } = useProfile()

  const canAddResume = canAddMoreResumes(profile ?? null, resumes)

  const onShow = () =>
    canAddResume ? functions.onShowTemplate(true) : functions.onShowPricing(true)

  return (
    <TemplatesProvider>
      <>
        <Button
          onClick={onShow}
          variant={"ghost"}
          className="flex h-72 w-44 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-neutral-300 transition-all hover:opacity-50"
        >
          <FilePlus2Icon size={44} strokeWidth={1.2} />
        </Button>
        <ResumeTemplatesModal
          canAddResume={canAddResume}
          isOpen={state.isTemplateModalOpen}
          setIsOpen={functions.onShowTemplate}
        />
        <PricingModal isOpen={state.isPricingModalOpen} setIsOpen={functions.onShowPricing} />
      </>
    </TemplatesProvider>
  )
}

export { CreateResume }
