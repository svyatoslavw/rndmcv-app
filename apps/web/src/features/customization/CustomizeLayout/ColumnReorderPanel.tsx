"use client"

import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd"

import { DraggableCard, selectCustomizationResume, useResumeActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { SectionKey } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"
import { UserSearchIcon } from "lucide-react"

const enforcePersonPosition = (items: SectionKey[]): SectionKey[] => {
  return ["person", ...items.filter((item) => item !== "person")]
}

const ColumnReorderPanel = () => {
  const { reorderColumns } = useResumeActions()

  const {
    layout,
    variant,
    columns: { left, right }
  } = useAppSelector(selectCustomizationResume("layout"))

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const isLeftColumn = source.droppableId === "leftColumn"
    const sourceColumn = isLeftColumn ? left : right
    const destColumn = destination.droppableId === "leftColumn" ? left : right

    const sourceItems = Array.from(sourceColumn)
    const [movedItem] = sourceItems.splice(source.index, 1)

    if (movedItem === "person") return

    if (source.droppableId === destination.droppableId) {
      // Move within the same column
      sourceItems.splice(destination.index, 0, movedItem)
    } else {
      // Move between columns
      const destItems = Array.from(destColumn)
      destItems.splice(destination.index, 0, movedItem)

      reorderColumns({
        left: isLeftColumn ? enforcePersonPosition(sourceItems) : enforcePersonPosition(destItems),
        right: isLeftColumn ? destItems : sourceItems
      })
      return
    }

    reorderColumns({
      left: isLeftColumn ? enforcePersonPosition(sourceItems) : left,
      right: isLeftColumn ? right : sourceItems
    })
  }

  return (
    <CustomizeSectionWrapper
      className={cn("flex-nowrap", {
        [layout.class]: layout.pos !== "top",
        "flex-col gap-0": variant === "1-column"
      })}
      heading="Arrange Sections"
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="leftColumn">
          {(provided) => (
            <div
              ref={provided.innerRef}
              className={cn("w-1/2", { "w-full": variant === "1-column" })}
              {...provided.droppableProps}
            >
              {layout.pos !== "top" && (
                <div>
                  <div
                    className={cn(
                      "dark:border-muted mb-2 flex h-[105px] items-center justify-center gap-2 rounded border border-b-4 bg-neutral-50 p-2 text-sm dark:bg-neutral-950"
                    )}
                  >
                    <UserSearchIcon />
                  </div>
                </div>
              )}
              {left &&
                left.map((block, index) => (
                  <DraggableCard
                    key={block}
                    className={"bg-neutral-50 capitalize dark:bg-neutral-950"}
                    draggableId={`left-${block}`}
                    index={index}
                    item={{ id: block }}
                  >
                    {block}
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
              className={cn("w-1/2", { "w-full": variant === "1-column" })}
              {...provided.droppableProps}
            >
              {right &&
                right.map((block, index) => (
                  <DraggableCard
                    key={block}
                    className={"bg-neutral-50 capitalize dark:bg-neutral-950"}
                    draggableId={`right-${block}`}
                    index={index}
                    item={{ id: block }}
                  >
                    {block}
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
