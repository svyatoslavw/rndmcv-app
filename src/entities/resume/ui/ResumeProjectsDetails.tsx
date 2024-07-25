import { IProject } from "@/shared/lib"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@/shared/ui"
import { DragDropContext, Draggable, Droppable, type DropResult } from "@hello-pangea/dnd"
import { FolderOpenIcon, GripVerticalIcon } from "lucide-react"
import React from "react"
import { addProject, reorderProjects } from "../model/resume.slice"

const ProjectItem = ({ project, index }: { project: IProject; index: number }) => {
  return (
    <Draggable draggableId={project.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={cn("mb-2 flex items-center gap-2 rounded-sm border p-2", {
            "bg-accent": snapshot.isDragging
          })}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="flex size-7 items-center justify-center" {...provided.dragHandleProps}>
            <GripVerticalIcon />
          </div>
          {project.title}
        </div>
      )}
    </Draggable>
  )
}

const ProjectList = React.memo(function QuoteList({ projects = [] }: { projects: IProject[] }) {
  return projects.map((project: IProject, index: number) => (
    <ProjectItem project={project} index={index} key={project.id} />
  ))
})

const ResumeProjectsDetails = () => {
  const dispatch = useAppDispatch()
  const projects = useAppSelector((state) => state.content.projects)

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

export { ResumeProjectsDetails }
