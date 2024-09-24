import { ChevronLeftIcon, CrownIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

import { useCreateResume } from "./useCreateResume"
import { useTemplate } from "./useTemplate"
import { PUBLIC_URL } from "@/shared/lib/config"
import { GENERAL_TEMPLATES } from "@/shared/lib/constants"
import type { ICustomization } from "@/shared/lib/types"
import { Button } from "@/shared/ui"
import { ResumeDocument } from "@/widgets"

interface ResumeTemplateItemProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  canAddResume: boolean
}

const ResumeTemplateItem = ({ setIsOpen, canAddResume }: ResumeTemplateItemProps) => {
  const { state, functions } = useCreateResume()
  const { template, setTemplate } = useTemplate()

  const onCreate = (template: ICustomization) => {
    functions.onCreateResume(template)
    setIsOpen(false)
  }

  if (!template) return null

  return (
    <div className="flex max-h-[500px] justify-between gap-5 py-4">
      <button className="flex h-[500px] w-[340px] cursor-pointer justify-start overflow-hidden rounded shadow-lg transition-all hover:opacity-50">
        <ResumeDocument
          customization={template}
          general={GENERAL_TEMPLATES}
          width={448}
          height={640}
          className="h-[640px]"
          isCard
        />
      </button>
      <div>
        <Button onClick={() => setTemplate(null)} size={"sm"} variant={"link"}>
          <ChevronLeftIcon size={16} className="mr-2" />
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
          {canAddResume ? (
            <Button disabled={state.isLoading} onClick={() => onCreate(template)} className="w-72">
              Use this template
            </Button>
          ) : (
            <Link
              className="flex h-9 w-72 items-center justify-center gap-2 rounded-[0.75rem] bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              href={PUBLIC_URL.pricing()}
            >
              <CrownIcon size={14} />
              Go premium
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export { ResumeTemplateItem }
