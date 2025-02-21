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
}
const DraggableCard = <T extends { id: string }>({
  index,
  item,
  draggableId,
  children,
  className
}: DraggableCardProps<T>) => {
  if (item.id === "person") return null
  return (
    <Draggable key={item.id} draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className={cn(
            "dark:border-muted mb-2 flex items-center gap-2 rounded border border-b-4 p-2 text-sm",
            className,
            { "bg-accent": snapshot.isDragging }
          )}
        >
          <div className="flex size-7 items-center justify-center">
            <GripVerticalIcon size={18} />
          </div>
          {children}
        </div>
      )}
    </Draggable>
  )
}

export { DraggableCard }
