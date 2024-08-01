"use client"

import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@/shared/ui"
import { EducationList } from "@/widgets"
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd"
import { GraduationCapIcon, PlusIcon } from "lucide-react"
import { reorderItems } from "../model/resume.slice"
import { toggleState } from "../model/status.slice"

const ResumeEducationDetails = () => {
  const dispatch = useAppDispatch()
  const education = useAppSelector((state) => state.resume.education.items)

  const onCreateEducation = () => {
    dispatch(toggleState({ key: "isCreating", content: "education" }))
  }

  function onDragEnd(result: DropResult) {
    const { destination, source } = result

    if (!destination) return
    if (destination.index === source.index) return

    dispatch(reorderItems({ key: "education", from: source.index, to: destination.index }))
  }

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center gap-4 text-2xl font-bold">
              <GraduationCapIcon size={26} /> Education
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="list">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <EducationList education={education} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <Button variant={"outline"} onClick={onCreateEducation} className="w-full">
              <PlusIcon size={18} className="mr-2" />
              Education
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export { ResumeEducationDetails }
