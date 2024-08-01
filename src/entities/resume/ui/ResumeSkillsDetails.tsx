"use client"

import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@/shared/ui"
import { ExperienceList } from "@/widgets"
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd"
import { BrainIcon, PlusIcon } from "lucide-react"
import { reorderItems } from "../model/resume.slice"
import { toggleState } from "../model/status.slice"

const ResumeSkillsDetails = () => {
  const dispatch = useAppDispatch()
  const experience = useAppSelector((state) => state.resume.experience.items)

  const onCreateExperience = () => {
    dispatch(toggleState({ key: "isCreating", content: "experience" }))
  }

  function onDragEnd(result: DropResult) {
    const { destination, source } = result

    if (!destination) return
    if (destination.index === source.index) return

    dispatch(reorderItems({ key: "experience", from: source.index, to: destination.index }))
  }

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center gap-4 text-2xl font-bold">
              <BrainIcon size={26} /> Skills
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="list">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <ExperienceList experience={experience} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <Button variant={"outline"} onClick={onCreateExperience} className="w-full">
              <PlusIcon size={18} className="mr-2" />
              Experience
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export { ResumeSkillsDetails }
