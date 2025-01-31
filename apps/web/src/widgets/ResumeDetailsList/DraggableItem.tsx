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
} from "@rndm/ui/components"
import { Trash2Icon } from "lucide-react"

import { DraggableCard } from "@/entities/resume"

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
    <DraggableCard key={item.id} draggableId={item.id} index={index} item={item}>
      <div className="flex w-full items-center justify-between text-center">
        <button
          className="w-full cursor-pointer text-start font-medium transition-all hover:text-neutral-400"
          onClick={onEditChange}
        >
          {render(item)}
        </button>
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
