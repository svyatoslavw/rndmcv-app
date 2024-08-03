import { Draggable } from "@hello-pangea/dnd"
import { GripVerticalIcon } from "lucide-react"
import React from "react"

import { cn } from "@/shared/lib/utils"

interface DraggableCardProps<T> {
  item: T
  index: number
  children?: React.ReactNode
  className?: string
  draggableId: string
}
const DraggableCard = <T extends { id: string }>({
  index,
  item,
  draggableId,
  children,
  className
}: DraggableCardProps<T>) => {
  return (
    <Draggable draggableId={draggableId} index={index} key={item.id}>
      {(provided, snapshot) => (
        <div
          className={cn("mb-2 flex items-center gap-2 rounded-lg border p-2", className, {
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

export { DraggableCard }
