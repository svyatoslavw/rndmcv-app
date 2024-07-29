import { DraggableCard } from "@/entities/resume"
import {
  reorderColumns,
  setColumnsWidth,
  setLayout,
  TLayoutPosition
} from "@/entities/resume/model/customization.slice"
import { ContentHeader } from "@/pages/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd"
import { UserPenIcon } from "lucide-react"

const LAYOUT_DATA: TLayoutPosition[] = [
  { position: "left", class: "flex-row" },
  { position: "top", class: "flex-col" },
  { position: "right", class: "flex-row-reverse" }
]

export default function ResumeCostumize() {
  const { left, right } = useAppSelector((state) => state.customization.columns)
  const { left: leftWidth, right: rightWidth } = useAppSelector(
    (state) => state.customization.columnsWidth
  )

  const dispatch = useAppDispatch()

  function onChangeWidth(side: "left" | "right") {
    dispatch(setColumnsWidth(side))
  }

  function onDragEnd(result: DropResult) {
    const { destination, source } = result

    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const sourceColumn = source.droppableId === "leftColumn" ? left : right
    const destColumn = destination.droppableId === "leftColumn" ? left : right

    const sourceItems = Array.from(sourceColumn)
    const [movedItem] = sourceItems.splice(source.index, 1)

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, movedItem)
      dispatch(
        reorderColumns({
          left: source.droppableId === "leftColumn" ? sourceItems : left,
          right: source.droppableId === "rightColumn" ? sourceItems : right
        })
      )
    } else {
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
    <div className="w-full">
      <ContentHeader />
      <div className="mt-5 rounded-xl bg-white">
        <div className="flex flex-col gap-6 p-8">
          <div>
            <h2 className="mb-2 text-2xl font-bold">Layout</h2>
            <div className="flex gap-4">
              {LAYOUT_DATA.map((layout) => (
                <div key={layout.position} className="flex flex-col gap-2">
                  <Button
                    onClick={() => dispatch(setLayout(layout))}
                    className={cn(
                      "flex h-16 w-16 rounded-none p-0 transition-all hover:opacity-70",
                      layout.class
                    )}
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
                  <p className="text-center text-xs capitalize">{layout.position}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Columns</h3>
            <div className="flex w-full gap-2">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="leftColumn">
                  {(provided) => (
                    <div className="w-1/2" ref={provided.innerRef} {...provided.droppableProps}>
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
                    <div className="w-1/2" ref={provided.innerRef} {...provided.droppableProps}>
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
          <div>
            <h3 className="mb-2 font-semibold">Columns Width</h3>
            <div className="flex w-full gap-2">
              <div className={cn("flex flex-col", { [`w-[${leftWidth}%]`]: true })}>
                <span className="text-xs">Left {leftWidth}%</span>
                <Button onClick={() => onChangeWidth("left")} variant={"outline"}>
                  +
                </Button>
              </div>
              <div className={cn("flex flex-col", { [`w-[${rightWidth}%]`]: true })}>
                <span className="text-xs">Right {rightWidth}%</span>
                <Button onClick={() => onChangeWidth("right")} variant={"outline"}>
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
