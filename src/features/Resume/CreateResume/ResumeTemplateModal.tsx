"use client"

import { useState } from "react"

import { ResumeSelectedTemplate } from "./ResumeSelectedTemplate"
import { ResumeTemplateList } from "./ResumeTemplateList"

import { ICustomization } from "@/shared/types"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"

interface IResumeTemplatesModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ResumeTemplatesModal = ({ isOpen, setIsOpen }: IResumeTemplatesModalProps) => {
  const [template, setTemplate] = useState<ICustomization | null>(null)

  return (
    <Dialog modal open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="md:max-w-[1000px]">
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
              setIsOpen={setIsOpen}
              setTemplate={setTemplate}
              template={template}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { ResumeTemplatesModal }
