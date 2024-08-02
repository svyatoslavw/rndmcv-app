import { DraggableCard } from "@/entities/resume"

interface DraggableItemProps<T> {
  item: T
  index: number
  onEditChange: () => void
  render: (item: T) => React.ReactNode
}

const DraggableItem = <T extends { id: string }>({
  index,
  item,
  onEditChange,
  render
}: DraggableItemProps<T>) => {
  return (
    <DraggableCard index={index} item={item} key={item.id} draggableId={item.id}>
      <div
        className="w-full cursor-pointer transition-all hover:text-neutral-400"
        onClick={onEditChange}
      >
        {render(item)}
      </div>
    </DraggableCard>
  )
}

export { DraggableItem }
