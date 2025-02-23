import { Button } from "@rndm/ui/components"
import { ShieldBan, SquarePenIcon, Trash2 } from "lucide-react"

const TableActions = <T,>({ item }: { item: T }) => {
  return (
    <div className="flex shrink-0 gap-1">
      <Button size={"xs"} className="gap-1">
        <SquarePenIcon size={16} /> Edit
      </Button>
      <Button variant={"success"} size={"xs"} className="gap-1">
        <ShieldBan size={16} /> Ban
      </Button>
      <Button size={"xs"} variant="destructive" className="gap-1">
        <Trash2 size={16} /> Delete
      </Button>
    </div>
  )
}

export { TableActions }
