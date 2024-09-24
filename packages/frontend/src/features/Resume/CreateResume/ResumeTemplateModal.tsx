"use client"

import { ResumeTemplateItem } from "./ResumeTemplateItem"
import { ResumeTemplateList } from "./ResumeTemplateList"
import { useTemplate } from "./useTemplate"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui"

interface IResumeTemplatesModalProps {
  description?: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ResumeTemplatesModal = ({ description, isOpen, setIsOpen }: IResumeTemplatesModalProps) => {
  const { template } = useTemplate()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Templates</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2">
          {description && (
            <p className="mx-auto text-xl font-semibold text-neutral-700 shadow-black drop-shadow">
              {description}
            </p>
          )}
          {!template ? <ResumeTemplateList /> : <ResumeTemplateItem setIsOpen={setIsOpen} />}
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { ResumeTemplatesModal }
