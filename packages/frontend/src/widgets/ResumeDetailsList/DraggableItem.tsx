import { Trash2Icon } from "lucide-react"

import { DraggableCard } from "@/entities/resume"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button
} from "@/shared/ui"

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
        <AlertDialog>
          <AlertDialogTrigger>
            <Button size={"icon"} variant={"ghost"}>
              <Trash2Icon size={18} />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this item?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onRemove}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </DraggableCard>
  )
}

export { DraggableItem }
