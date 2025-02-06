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
import { memo, useCallback, useMemo, useState } from "react"

import { changeSectionVisibility, selectGeneralResume, updateGeneralFlag } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { DefaultIcon, SectionKey } from "@/shared/types"

interface SectionConfig {
  content: SectionKey
  icon: DefaultIcon
  description: string
}

const CONTENT_SECTIONS: SectionConfig[] = [
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

interface SectionButtonProps {
  section: SectionConfig
  onAddSection: (section: SectionKey) => void
}

const AddContentButton = memo(
  ({ availableSections, onClick }: { availableSections: SectionConfig[]; onClick: () => void }) => (
    <Button
      className={"relative z-10 inline-flex transition-all hover:scale-105 active:scale-105"}
      size={"lg"}
      variant={availableSections.length ? "default" : "outline"}
      onClick={onClick}
    >
      {availableSections.length ? (
        <>
          <div className="from-primary/60 to-primary absolute -inset-1 -z-10 rounded-xl bg-gradient-to-b opacity-75 blur" />
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
  )
)

AddContentButton.displayName = "AddContentButton"

const SectionButton = memo(({ section, onAddSection }: SectionButtonProps) => (
  <Button
    className="flex h-auto w-full flex-col justify-start gap-2 whitespace-normal rounded-xl p-4 text-start transition-all hover:scale-105 active:scale-105 lg:w-[23%]"
    variant="secondary"
    onClick={() => onAddSection(section.content)}
  >
    <h4 className="flex w-full items-center gap-3 text-start text-lg font-bold capitalize">
      <section.icon size={26} />
      {section.content}
    </h4>
    <p className="text-sm font-normal tracking-wide">{section.description}</p>
  </Button>
))

SectionButton.displayName = "SectionButton"

const SectionsList = memo(
  ({
    sections,
    onAddSection
  }: {
    sections: SectionConfig[]
    onAddSection: (section: SectionKey) => void
  }) => (
    <div className="flex flex-wrap gap-4 py-4">
      {sections.length ? (
        sections.map((section) => (
          <SectionButton key={section.content} section={section} onAddSection={onAddSection} />
        ))
      ) : (
        <span className="self-center text-center text-xl font-medium">No more sections</span>
      )}
    </div>
  )
)

SectionsList.displayName = "SectionsList"

const AddSectionToResume = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()

  const visibleBlocks = useAppSelector(selectGeneralResume("visibleBlocks"))
  const isFirstLoading = useAppSelector(selectGeneralResume("isFirstLoading"))

  const availableSections = useMemo(
    () => CONTENT_SECTIONS.filter((section) => !visibleBlocks.includes(section.content)),
    [visibleBlocks]
  )

  const onAddSection = useCallback(
    (section: SectionKey) => {
      dispatch(changeSectionVisibility(section))
      if (isFirstLoading) {
        dispatch(updateGeneralFlag({ key: "isFirstLoading", value: false }))
      }
      setIsOpen(false)
    },
    [dispatch, isFirstLoading]
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="w-fit">
        <AddContentButton availableSections={availableSections} onClick={() => setIsOpen(true)} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-6xl">
        <DialogHeader>
          <DialogTitle>Add content</DialogTitle>
        </DialogHeader>
        <SectionsList sections={availableSections} onAddSection={onAddSection} />
        <DialogFooter />
      </DialogContent>
    </Dialog>
  )
}

export { AddSectionToResume }
