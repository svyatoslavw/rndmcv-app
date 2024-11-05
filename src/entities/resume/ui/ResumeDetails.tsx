"use client"

import type { SectionItem, SectionKey, SectionKeyWithoutPerson } from "@/shared/lib/types"

import { DragDropContext, type DropResult, Droppable, DroppableProvided } from "@hello-pangea/dnd"
import { EyeOffIcon, LucideIcon, PlusIcon } from "lucide-react"
import Image from "next/image"

import { reorderItems } from "../model/resume.slice"
import { toggleStatus } from "../model/status.slice"

import { useAppDispatch } from "@/app/store"
import { toggleSectionInResume } from "@/entities/resume"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@/shared/ui"

interface ResumeDetailsProps<T> {
  type: SectionKeyWithoutPerson
  Icon: LucideIcon
  items: T[]
  render: (items: T[], provided: DroppableProvided) => React.ReactNode
}

const ResumeDetails = <T extends SectionItem>({
  items,
  Icon,
  render,
  type
}: ResumeDetailsProps<T>) => {
  const dispatch = useAppDispatch()
  const onCreate = () => {
    dispatch(toggleStatus({ key: "isCreating", content: type }))
  }

  const onRemoveSection = (section: SectionKey) => {
    dispatch(toggleSectionInResume(section))
  }

  function onDragEnd(result: DropResult) {
    const { destination, source } = result

    if (!destination) return
    if (destination.index === source.index) return

    dispatch(reorderItems({ key: type, from: source.index, to: destination.index }))
  }

  return (
    <div>
      <Accordion collapsible type="single">
        <AccordionItem className="relative mr-1 rounded-2xl dark:bg-background" value={type}>
          <AccordionTrigger>
            <div className="flex items-center gap-4 text-2xl font-bold capitalize">
              <Icon size={26} /> {type}
            </div>
            <Image
              alt="ai"
              className="absolute -right-1 -top-1"
              height={20}
              src="/images/ai-badge2.png"
              width={20}
            />
          </AccordionTrigger>
          <AccordionContent>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="list">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {render(items, provided)}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <div className="flex items-center">
              <Button
                className="w-full rounded-none rounded-l-lg capitalize"
                variant={"outline"}
                onClick={onCreate}
              >
                <PlusIcon className="mr-2" size={16} />
                Add new {type}
              </Button>
              <Button
                className="rounded-none rounded-r-lg capitalize"
                variant={"outline"}
                onClick={() => onRemoveSection(type)}
              >
                <EyeOffIcon className="mr-2" size={18} />
                Hide
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export { ResumeDetails }
