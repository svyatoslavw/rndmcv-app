import { DraggableCard } from "@/entities/resume"
import {
  reorderBlocks,
  setLayout,
  TLayoutPosition
} from "@/entities/resume/model/customization.slice"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd"

const LAYOUT_DATA: TLayoutPosition[] = [
  { position: "left", class: "flex-row" },
  { position: "top", class: "flex-col" },
  { position: "right", class: "flex-row-reverse" }
]

export default function ResumeCostumize() {
  const blocks = useAppSelector((state) => state.customization.blocks)
  const dispatch = useAppDispatch()

  function onDragEnd(result: DropResult) {
    const { destination, source } = result

    if (!destination) return
    if (destination.index === source.index) return

    const items = Array.from(blocks)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(destination.index, 0, reorderedItem)

    dispatch(reorderBlocks(items))
  }
  return (
    <div className="rounded-lg bg-white">
      <div className="p-8">
        <h2 className="text-2xl font-bold">Layout</h2>
        <div className="flex gap-4">
          {LAYOUT_DATA.map((layout) => (
            <Button
              onClick={() => dispatch(setLayout(layout))}
              className={cn("flex h-16 w-16 rounded-none border p-0", layout.class)}
            >
              <div
                className={cn("h-full w-1/2 bg-neutral-600", {
                  "h-1/2 w-full": layout.position === "top"
                })}
              />
              <div
                className={cn("h-full w-1/2 bg-white", {
                  "h-1/2 w-full": layout.position === "top"
                })}
              />
            </Button>
          ))}
        </div>
      </div>
      <div className="flex w-full gap-2 p-8">
        <div className="h-24 w-1/2 bg-neutral-400"></div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <div className="w-1/2" ref={provided.innerRef} {...provided.droppableProps}>
                {blocks.map((block, index) => (
                  <DraggableCard
                    item={{ id: block }}
                    index={index}
                    key={block}
                    draggableId={block}
                    className="bg-neutral-100 capitalize"
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
