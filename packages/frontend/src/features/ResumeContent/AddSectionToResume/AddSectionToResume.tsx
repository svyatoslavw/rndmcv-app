"use client"

import { CheckIcon, PlusIcon } from "lucide-react"
import { Just_Another_Hand } from "next/font/google"
import { useCallback, useState } from "react"

import { SectionButton } from "./SectionButton"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { hideIsFirstLoading, selectGeneralResume, toggleSectionInResume } from "@/entities/resume"
import { CONTENT_SECTIONS } from "@/shared/lib/constants"
import type { TypeSectionKey } from "@/shared/lib/types"
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

const AddSectionToResume = () => {
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useAppDispatch()
  const { visibleBlocks, isFirstLoading } = useAppSelector(selectGeneralResume)

  const sections = CONTENT_SECTIONS.filter((section) => !visibleBlocks.includes(section.content))

  const onAddSection = useCallback(
    (section: TypeSectionKey) => {
      dispatch(toggleSectionInResume(section))
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
