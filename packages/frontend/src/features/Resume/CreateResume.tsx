"use client"

import { FilePlus2Icon } from "lucide-react"

import { useCreateResume } from "./useCreateResume"
import { Button, PricingModal } from "@/shared/ui"

const CreateResume = () => {
  const { onCreateResume, isLoading, isModalOpen, setIsModalOpen } = useCreateResume()

  return (
    <>
      <Button
        disabled={isLoading}
        onClick={onCreateResume}
        variant={"ghost"}
        className="flex h-72 w-44 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-neutral-300 transition-all hover:opacity-50"
      >
        <FilePlus2Icon size={44} strokeWidth={1.2} />
      </Button>
      <PricingModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        description="To increase your space, you'll need to subscribe."
      />
    </>
  )
}

export { CreateResume }
