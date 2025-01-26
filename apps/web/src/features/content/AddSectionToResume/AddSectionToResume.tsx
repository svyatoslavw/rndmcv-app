"use client"

import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@rndm/ui/components"
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
import { memo, useCallback, useState } from "react"

import {
  ResumeDomain,
  changeSectionVisibility,
  selectGeneralResume,
  updateGeneralFlag
} from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { DefaultIcon } from "@/shared/types"

interface IContentSection {
  content: ResumeDomain.SectionKey
  icon: DefaultIcon
  description: string
}

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

const SectionButton = memo(
  ({
    section,
    onAddSection
  }: {
    section: IContentSection
    onAddSection: (section: ResumeDomain.SectionKey) => void
  }) => {
    return (
      <Button
        key={section.content}
        className="flex h-auto flex-col justify-start gap-2 whitespace-normal rounded-xl p-4 text-start transition-all hover:scale-105 active:scale-105"
        variant={"secondary"}
        onClick={() => onAddSection(section.content)}
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
  const visibleBlocks = useAppSelector(selectGeneralResume("visibleBlocks"))
  const isFirstLoading = useAppSelector(selectGeneralResume("isFirstLoading"))

  const sections = CONTENT_SECTIONS.filter((section) => !visibleBlocks.includes(section.content))

  const onAddSection = useCallback(
    (section: ResumeDomain.SectionKey) => {
      dispatch(changeSectionVisibility(section))
      isFirstLoading && dispatch(updateGeneralFlag({ key: "isFirstLoading", value: false }))
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
