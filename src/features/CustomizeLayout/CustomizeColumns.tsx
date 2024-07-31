import { DraggableCard, reorderColumns } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd"
import { UserPenIcon } from "lucide-react"

const CustomizeColumns = () => {
  const dispatch = useAppDispatch()

  const layout = useAppSelector((state) => state.customization.layout)
  const { left, right } = useAppSelector((state) => state.customization.columns)

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
    <div>
      <h3 className="mb-2 font-semibold">Columns</h3>
      <div className={cn("flex w-full gap-2", { [layout.class]: true })}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="leftColumn">
            {(provided) => (
              <div
                className={cn("w-1/2", { "w-full": layout.position === "top" })}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="mb-[9px] flex h-[98px] items-center justify-center rounded-md border bg-neutral-50">
                  <UserPenIcon />
                </div>
                {left &&
                  left.map((block, index) => (
                    <DraggableCard
                      item={{ id: block }}
                      index={index}
                      key={block}
                      draggableId={`left-${block}`}
                      className="bg-neutral-50 capitalize"
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
                className={cn("w-1/2", { "w-full": layout.position === "top" })}
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
                      className="bg-neutral-50 capitalize"
                    >
                      {block}
                    </DraggableCard>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}

export { CustomizeColumns }
