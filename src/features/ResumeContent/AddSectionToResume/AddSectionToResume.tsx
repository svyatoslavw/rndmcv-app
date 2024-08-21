"use client"

import { LucideIcon, PlusIcon } from "lucide-react"
import { Just_Another_Hand } from "next/font/google"
import { memo, useCallback, useState } from "react"

import { addSectionToResume, hideIsFirstLoading } from "@/entities/resume"
import { CONTENT_SECTIONS, TSectionKey } from "@/shared/lib"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import {
  ArrowIcon,
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/shared/ui"

const font = Just_Another_Hand({ weight: "400" })

interface IContentSection {
  content: TSectionKey
  icon: LucideIcon
  description: string
}
const SectionButton = memo(
  ({
    section,
    onAddSection
  }: {
    section: IContentSection
    onAddSection: (section: TSectionKey) => void
  }) => {
    return (
      <Button
        variant={"secondary"}
        key={section.content}
        onClick={() => onAddSection(section.content)}
        className="flex h-auto flex-col gap-2 whitespace-normal rounded-xl p-4 text-start transition-all hover:scale-105 active:scale-105"
      >
        <h4 className="flex w-full items-center gap-3 text-start text-lg font-bold capitalize">
          <section.icon size={26} />
          {section.content}
        </h4>
        <p className="text-sm font-normal tracking-wide">{section.description}</p>
      </Button>
    )
  }
)

SectionButton.displayName = "SectionButton"

const AddSectionToResume = () => {
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useAppDispatch()
  const visibleBlocks = useAppSelector((state) => state.resume.visibleBlocks)
  const isFirstLoading = useAppSelector((state) => state.resume.isFirstLoading)

  const onAddSection = useCallback(
    (section: TSectionKey) => {
      dispatch(addSectionToResume({ section }))
      isFirstLoading && dispatch(hideIsFirstLoading())
      setIsOpen(false)
    },
    [dispatch, isFirstLoading]
  )

  return (
    <div className="mx-auto w-full text-center">
      {isFirstLoading && (
        <>
          <h3 className={cn("text-6xl font-medium", font.className)}>
            Well done! :) Add some content here
          </h3>
          <ArrowIcon className="mx-auto rotate-180 font-primary" width={100} height={100} />
        </>
      )}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size={"lg"}
            className={"w-80 shadow-lg transition-all hover:scale-105 active:scale-105"}
          >
            <PlusIcon size={18} className="mr-2" />
            Add content
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-6xl">
          <DialogHeader>
            <DialogTitle>Add content</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-4 gap-4 py-4">
            {CONTENT_SECTIONS.filter((section) => !visibleBlocks.includes(section.content)).map(
              (section) => (
                <SectionButton
                  key={section.content}
                  section={section}
                  onAddSection={onAddSection}
                />
              )
            )}
          </div>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { AddSectionToResume }
