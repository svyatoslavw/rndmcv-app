"use client"

import {
  BrainIcon,
  BriefcaseBusinessIcon,
  CheckIcon,
  FolderOpenIcon,
  GraduationCapIcon,
  LanguagesIcon,
  PlusIcon
} from "lucide-react"
import { Just_Another_Hand } from "next/font/google"
import { useCallback, useState } from "react"

import { SectionButton } from "./SectionButton"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { hideIsFirstLoading, selectGeneralResume, toggleSectionInResume } from "@/entities/resume"
import type { IContentSection, TypeSectionKey } from "@/shared/lib/types"
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

const CONTENT_SECTIONS: IContentSection[] = [
  {
    content: "education",
    icon: GraduationCapIcon,
    description: "Show off your primary education, college degrees & exchange semesters."
  },
  {
    content: "experience",
    icon: BriefcaseBusinessIcon,
    description: "A place to highlight your professional experience - including internships."
  },
  {
    content: "skills",
    icon: BrainIcon,
    description: "List your technical, managerial or soft skills in this section."
  },
  {
    content: "languages",
    icon: LanguagesIcon,
    description: "You speak more than one language? Make sure to list them here."
  },
  {
    content: "projects",
    icon: FolderOpenIcon,
    description: "Worked on a particular challenging project in the past? Mention it here."
  }
]

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
        <DialogTrigger asChild className="w-fit">
          <Button
            className={"relative z-10 inline-flex transition-all hover:scale-105 active:scale-105"}
            size={"lg"}
            variant={sections.length ? "default" : "outline"}
          >
            {sections.length ? (
              <>
                <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-b from-primary/60 to-primary opacity-75 blur" />
                <PlusIcon className="mr-2" size={18} />
                Add content
              </>
            ) : (
              <>
                <CheckIcon className="mr-2" size={18} />
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
          <DialogFooter />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { AddSectionToResume }
