"use client"

import { DragDropContext, type DropResult, Droppable, DroppableProvided } from "@hello-pangea/dnd"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button
} from "@rndm/ui/components"
import { EyeOffIcon, LucideIcon, PlusIcon } from "lucide-react"

import { SectionEntity, SectionKey, SectionKeyWithoutPerson } from "@/shared/types"
import { toggleStatus } from "../model/slices/status.slice"

import { useAppDispatch } from "@/shared/lib/store"

import { changeSectionVisibility, reorderItems } from ".."

interface ResumeDetailsProps<T> {
  type: SectionKeyWithoutPerson
  Icon: LucideIcon
  items: T[]
  render: (items: T[], provided: DroppableProvided) => React.ReactNode
}

const ResumeDetails = <T extends SectionEntity>({
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
    dispatch(changeSectionVisibility(section))
  }

  function onDragEnd(result: DropResult) {
    const { destination, source } = result

    if (!destination) return
    if (destination.index === source.index) return

    dispatch(reorderItems({ key: type, from: source.index, to: destination.index }))
  }

  return (
    <Accordion collapsible type="single">
      <AccordionItem
        className="bg-background dark:border-secondary relative rounded-lg border" //mr-1
        value={type}
      >
        <AccordionTrigger>
          <div className="flex items-center gap-4 text-2xl font-bold capitalize">
            <Icon size={26} /> {type}
          </div>
          {/* <Image
            alt="ai"
            className="absolute -right-1 -top-1"
            height={16}
            src="/images/ai-badge.png"
            width={16}
          /> */}
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
  )
}

export { ResumeDetails }
