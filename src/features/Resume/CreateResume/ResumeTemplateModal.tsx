"use client"

import { useState } from "react"

import { ResumeSelectedTemplate } from "./ResumeSelectedTemplate"
import { ResumeTemplateList } from "./ResumeTemplateList"
import { ICustomization } from "@/shared/lib/types"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"

interface IResumeTemplatesModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ResumeTemplatesModal = ({ isOpen, setIsOpen }: IResumeTemplatesModalProps) => {
  const [template, setTemplate] = useState<ICustomization | null>(null)

  return (
    <Dialog open={isOpen} modal onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Templates</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2">
          <p className="mx-auto text-xl font-semibold text-neutral-700 shadow-black drop-shadow dark:text-neutral-300">
            Select a template to get started.
          </p>
          {!template ? (
            <ResumeTemplateList setTemplate={setTemplate} />
          ) : (
            <ResumeSelectedTemplate
              template={template}
              setTemplate={setTemplate}
              setIsOpen={setIsOpen}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { ResumeTemplatesModal }
