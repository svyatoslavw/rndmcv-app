"use client"

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
  isPersonal?: boolean
}
const DraggableCard = <T extends { id: string }>({
  index,
  item,
  draggableId,
  children,
  className,
  isPersonal
}: DraggableCardProps<T>) => {
  return (
    <Draggable key={item.id} draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className={cn(
            "dark:border-muted mb-2 flex items-center gap-2 rounded-lg border p-2 text-sm",
            className,
            {
              "bg-accent": snapshot.isDragging
            }
          )}
          {...provided.draggableProps}
          {...(isPersonal ? provided.dragHandleProps : {})}
        >
          {!isPersonal && (
            <div className="flex size-7 items-center justify-center" {...provided.dragHandleProps}>
              <GripVerticalIcon size={18} />
            </div>
          )}
          {children}
        </div>
      )}
    </Draggable>
  )
}

export { DraggableCard }
