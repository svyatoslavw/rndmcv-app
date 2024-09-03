"use client"

import { CheckIcon, PlusIcon } from "lucide-react"
import { Just_Another_Hand } from "next/font/google"
import { memo, useCallback, useState } from "react"

import { hideIsFirstLoading, toggleSectionInResume } from "@/entities/resume"
import { CONTENT_SECTIONS } from "@/shared/lib/constants"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { IContentSection, TSectionKey } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/shared/ui"

const font = Just_Another_Hand({ weight: "400", subsets: ["latin"], fallback: ["sans-serif"] })

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

  const sections = CONTENT_SECTIONS.filter((section) => !visibleBlocks.includes(section.content))

  const onAddSection = useCallback(
    (section: TSectionKey) => {
      dispatch(toggleSectionInResume({ section }))
      isFirstLoading && dispatch(hideIsFirstLoading())
      setIsOpen(false)
    },
    [dispatch, isFirstLoading]
  )

  return (
    <div className="mx-auto w-full text-center">
      {isFirstLoading && (
        <h3 className={cn("mb-3 text-7xl font-medium", font.className)}>
          Well done! :) Add some content here
        </h3>
      )}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="w-fit" asChild>
          <Button
            size={"lg"}
            variant={sections.length ? "default" : "outline"}
            className={"relative z-10 inline-flex transition-all hover:scale-105 active:scale-105"}
          >
            {sections.length ? (
              <>
                <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-b from-primary/60 to-primary opacity-75 blur" />
                <PlusIcon size={18} className="mr-2" />
                Add content
              </>
            ) : (
              <>
                <CheckIcon size={18} className="mr-2" />
                No more sections
              </>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-6xl">
          <DialogHeader>
            <DialogTitle>Add content</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-4 gap-4 py-4">
            {sections.length ? (
              sections.map((section) => (
                <SectionButton
                  key={section.content}
                  section={section}
                  onAddSection={onAddSection}
                />
              ))
            ) : (
              <span className="col-span-full text-center text-xl font-medium">
                No more sections
              </span>
            )}
          </div>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { AddSectionToResume }
