import { IEducation } from "@/shared/lib"
import { cn } from "@/shared/lib/utils"
import { Draggable } from "@hello-pangea/dnd"
import { GripVerticalIcon } from "lucide-react"
import React from "react"

interface ResumeEducationCardProps {
  education: IEducation
  index: number
  children?: React.ReactNode
}
const ResumeEducationCard = ({ index, education, children }: ResumeEducationCardProps) => {
  return (
    <Draggable draggableId={education.id} index={index} key={education.id}>
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

export { ResumeEducationCard }
