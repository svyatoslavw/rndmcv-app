"use client"

import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { DraggableCard, reorderColumns, selectCustomizationResume } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"
import { CustomizeSectionWrapper } from "@/shared/ui"

const CustomizeColumns = () => {
  const dispatch = useAppDispatch()

  const {
    layout: {
      layout,
      columns: { left, right }
    }
  } = useAppSelector(selectCustomizationResume)

  const onDragEnd = (result: DropResult): void => {
    const { destination, source } = result

    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const sourceColumn = source.droppableId === "leftColumn" ? left : right
    const destColumn = destination.droppableId === "leftColumn" ? left : right

    const sourceItems = Array.from(sourceColumn)
    const [movedItem] = sourceItems.splice(source.index, 1)
    if (source.droppableId === destination.droppableId) {
      // Moving within the same column
      sourceItems.splice(destination.index, 0, movedItem)
      dispatch(
        reorderColumns({
          left: source.droppableId === "leftColumn" ? sourceItems : left,
          right: source.droppableId === "rightColumn" ? sourceItems : right
        })
      )
    } else {
      // Move between columns
      const destItems = Array.from(destColumn)
      destItems.splice(destination.index, 0, movedItem)
      dispatch(
        reorderColumns({
          left: source.droppableId === "leftColumn" ? sourceItems : destItems,
          right: source.droppableId === "rightColumn" ? sourceItems : destItems
        })
      )
    }
  }
  return (
    <CustomizeSectionWrapper
      heading="Columns"
      className={cn("flex-nowrap", { [layout.class]: true })}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="leftColumn">
          {(provided) => (
            <div
              className={cn("w-1/2", { "w-full": layout.pos === "top" })}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {left &&
                left.map((block, index) => (
                  <DraggableCard
                    item={{ id: block }}
                    index={index}
                    key={block}
                    draggableId={`left-${block}`}
                    className={
                      block === "person"
                        ? "mb-[9px] h-[100px] bg-neutral-50"
                        : "bg-neutral-50 capitalize"
                    }
                  >
                    {block === "person" ? "Personal information" : block}
                  </DraggableCard>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="rightColumn">
          {(provided) => (
            <div
              className={cn("w-1/2", { "w-full": layout.pos === "top" })}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {right &&
                right.map((block, index) => (
                  <DraggableCard
                    item={{ id: block }}
                    index={index}
                    key={block}
                    draggableId={`right-${block}`}
                    className={
                      block === "person"
                        ? "mb-[9px] h-[100px] bg-neutral-50"
                        : "bg-neutral-50 capitalize"
                    }
                  >
                    {block === "person" ? "Personal information" : block}
                  </DraggableCard>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </CustomizeSectionWrapper>
  )
}

export { CustomizeColumns }
