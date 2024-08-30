import { Trash2Icon } from "lucide-react"

import { DraggableCard } from "@/entities/resume"
import { Button } from "@/shared/ui"

interface DraggableItemProps<T> {
  item: T
  index: number
  onEditChange: () => void
  onRemove: () => void
  render: (item: T) => React.ReactNode
}

const DraggableItem = <T extends { id: string }>({
  index,
  item,
  onEditChange,
  onRemove,
  render
}: DraggableItemProps<T>) => {
  return (
    <DraggableCard index={index} item={item} key={item.id} draggableId={item.id}>
      <div className="flex w-full items-center justify-between">
        <div
          className="w-full cursor-pointer transition-all hover:text-neutral-400"
          onClick={onEditChange}
        >
          {render(item)}
        </div>
        <Button onClick={onRemove} size={"icon"} variant={"ghost"}>
          <Trash2Icon size={18} />
        </Button>
      </div>
    </DraggableCard>
  )
}

export { DraggableItem }
