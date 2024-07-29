import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@/shared/ui"
import { ProjectList } from "@/widgets"
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd"
import { FolderOpenIcon, PlusIcon } from "lucide-react"
import { reorderItems } from "../model/resume.slice"
import { toggleState } from "../model/status.slice"

const ResumeProjectDetails = () => {
  const dispatch = useAppDispatch()
  const projects = useAppSelector((state) => state.resume.projects.items)

  const onCreateProject = () => {
    dispatch(toggleState({ key: "isCreating", content: "projects" }))
  }

  function onDragEnd(result: DropResult) {
    const { destination, source } = result

    if (!destination) return
    if (destination.index === source.index) return

    dispatch(reorderItems({ key: "projects", from: source.index, to: destination.index }))
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
            <Button variant={"outline"} onClick={onCreateProject} className="w-full">
              <PlusIcon size={18} className="mr-2" />
              Add Project
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export { ResumeProjectDetails }
