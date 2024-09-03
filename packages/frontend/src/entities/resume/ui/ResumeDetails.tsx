"use client"

import { DragDropContext, type DropResult, Droppable, DroppableProvided } from "@hello-pangea/dnd"
import { LucideIcon, MinusIcon, PlusIcon } from "lucide-react"

import { reorderItems } from "../model/resume.slice"
import { TUpdateKey } from "../model/resume.types"
import { toggleStatus } from "../model/status.slice"

import { toggleSectionInResume } from "@/entities/resume"
import { useAppDispatch } from "@/shared/lib/store"
import { TSectionItem, TSectionKey } from "@/shared/lib/types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@/shared/ui"

interface ResumeDetailsProps<T> {
  type: TUpdateKey
  Icon: LucideIcon
  items: T[]
  render: (items: T[], provided: DroppableProvided) => React.ReactNode
}

const ResumeDetails = <T extends TSectionItem>({
  items,
  Icon,
  render,
  type
}: ResumeDetailsProps<T>) => {
  const dispatch = useAppDispatch()
  const onCreate = () => {
    dispatch(toggleStatus({ key: "isCreating", content: type }))
  }

  const onRemoveSection = (section: TSectionKey) => {
    dispatch(toggleSectionInResume({ section }))
  }

  function onDragEnd(result: DropResult) {
    const { destination, source } = result

    if (!destination) return
    if (destination.index === source.index) return

    dispatch(reorderItems({ key: type, from: source.index, to: destination.index }))
  }

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value={type} className="rounded-xl">
          <AccordionTrigger>
            <div className="flex items-center gap-4 text-2xl font-bold capitalize">
              <Icon size={26} /> {type}
            </div>
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
                variant={"outline"}
                onClick={onCreate}
                className="w-full rounded-none rounded-l-lg capitalize"
              >
                <PlusIcon size={18} className="mr-2" />
                {type}
              </Button>
              <Button
                variant={"outline"}
                onClick={() => onRemoveSection(type)}
                className="rounded-none rounded-r-lg capitalize"
              >
                <MinusIcon size={18} className="mr-2" />
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
