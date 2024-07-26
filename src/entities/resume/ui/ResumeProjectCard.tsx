import type { IProject } from "@/shared/lib"
import { cn } from "@/shared/lib/utils"
import { Draggable } from "@hello-pangea/dnd"
import { GripVerticalIcon } from "lucide-react"
import React from "react"

interface ResumeProjectCardProps {
  project: IProject
  index: number
  children?: React.ReactNode
}
const ResumeProjectCard = ({ index, project, children }: ResumeProjectCardProps) => {
  return (
    <Draggable draggableId={project.id} index={index} key={project.id}>
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
          {children}
        </div>
      )}
    </Draggable>
  )
}

export { ResumeProjectCard }
