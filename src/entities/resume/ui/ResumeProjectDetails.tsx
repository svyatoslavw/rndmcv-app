import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@/shared/ui"
import { ProjectList } from "@/widgets"
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd"
import { FolderOpenIcon } from "lucide-react"
import { addProject, reorderProjects } from "../model/resume.slice"

const ResumeProjectDetails = () => {
  const dispatch = useAppDispatch()
  const projects = useAppSelector((state) => state.content.projects.items)

  const onAddProject = () => {
    dispatch(addProject())
  }

  function onDragEnd(result: DropResult) {
    if (!result.destination) return
    if (result.destination.index === result.source.index) return

    dispatch(reorderProjects({ from: result.source.index, to: result.destination.index }))
  }

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center gap-4 text-2xl font-bold">
              <FolderOpenIcon size={26} /> Projects
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="list">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <ProjectList projects={projects} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <Button variant={"outline"} onClick={onAddProject} className="w-full">
              Add Project
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export { ResumeProjectDetails }
