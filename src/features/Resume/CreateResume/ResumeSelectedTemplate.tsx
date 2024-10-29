import type { ICustomization } from "@/shared/lib/types"

import { ChevronLeftIcon } from "lucide-react"
import React from "react"

import { useCreateResume } from "./useCreateResume"

import { GENERAL_TEMPLATES } from "@/shared/lib/constants"
import { Button } from "@/shared/ui"
import { ResumeDocument } from "@/widgets"

interface ResumeTemplateItemProps {
  template: ICustomization | null
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setTemplate: React.Dispatch<React.SetStateAction<ICustomization | null>>
}

const ResumeSelectedTemplate = ({ template, setTemplate, setIsOpen }: ResumeTemplateItemProps) => {
  const {
    state,
    functions: { onCreateResume }
  } = useCreateResume()

  const onCreate = (template: ICustomization) => {
    onCreateResume(template)
    setIsOpen(false)
  }

  if (!template) return null

  return (
    <div className="flex max-h-[500px] justify-between gap-5 py-4">
      <button className="flex h-[500px] w-[340px] cursor-pointer justify-start overflow-hidden rounded shadow-lg transition-all hover:opacity-50">
        <ResumeDocument
          isCard
          className="h-[640px]"
          customization={template}
          general={GENERAL_TEMPLATES}
          height={640}
          width={448}
        />
      </button>
      <div>
        <Button size={"sm"} variant={"link"} onClick={() => setTemplate(null)}>
          <ChevronLeftIcon className="mr-2" size={16} />
          Back
        </Button>
        <h3 className="text-3xl font-bold">Rosewood · Two-column resume template</h3>
        <div className="my-6 h-[2px] w-full rounded-2xl bg-neutral-200" />
        <div className="flex flex-col gap-4">
          <h4>
            Each template has been crafted with care to make designing your resume an absolute
            breeze for you.
          </h4>
          <ul className="ml-4 list-disc">
            <li>A4 / US-Letter Size</li>
            <li>Editable Text</li>
            <li>Fully customizable</li>
            <li>Print ready format</li>
            <li>Online resume with shareable link</li>
          </ul>

          <Button className="w-72" disabled={state.isLoading} onClick={() => onCreate(template)}>
            Use this template
          </Button>
        </div>
      </div>
    </div>
  )
}

export { ResumeSelectedTemplate }
