"use client"

import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { DraggableCard, reorderColumns, selectCustomizationResume } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"
import { CustomizeSectionWrapper } from "@/shared/ui"

const ColumnReorderPanel = () => {
  const dispatch = useAppDispatch()

  const {
    layout,
    columns: { left, right }
  } = useAppSelector(selectCustomizationResume("layout"))

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
    <CustomizeSectionWrapper className={cn("flex-nowrap", layout.class)} heading="Columns">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="leftColumn">
          {(provided) => (
            <div
              ref={provided.innerRef}
              className={cn("w-1/2", { "w-full border-b-2 border-input": layout.pos === "top" })}
              {...provided.droppableProps}
            >
              {left &&
                left.map((block, index) => (
                  <DraggableCard
                    key={block}
                    className={
                      block === "person"
                        ? "mb-[9px] h-[100px] justify-center bg-neutral-50 dark:bg-neutral-950"
                        : "bg-neutral-50 capitalize dark:bg-neutral-950"
                    }
                    draggableId={`left-${block}`}
                    index={index}
                    isPersonal={block === "person"}
                    item={{ id: block }}
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
              ref={provided.innerRef}
              className={cn("w-1/2", { "w-full": layout.pos === "top" })}
              {...provided.droppableProps}
            >
              {right &&
                right.map((block, index) => (
                  <DraggableCard
                    key={block}
                    className={
                      block === "person"
                        ? "mb-[9px] h-[100px] justify-center bg-neutral-50 dark:bg-neutral-950"
                        : "bg-neutral-50 capitalize dark:bg-neutral-950"
                    }
                    draggableId={`right-${block}`}
                    index={index}
                    isPersonal={block === "person"}
                    item={{ id: block }}
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

export { ColumnReorderPanel }
