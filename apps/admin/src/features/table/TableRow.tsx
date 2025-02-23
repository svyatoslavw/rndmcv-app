import type { Column } from "@/shared/types"
import { TableCell } from "./TableCell"

interface TableRowProps<T> {
  item: T
  columns: Column<T>[]
}

const TableRow = <T extends { id: string }>({ item, columns }: TableRowProps<T>) => {
  return (
    <div className="after:bg-primary relative flex w-full items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors after:absolute after:left-0 after:top-0 after:z-10 after:block after:h-full after:w-[6px] after:rounded-l-lg after:content-[''] hover:bg-gray-100">
      {columns.map((col) => (
        <TableCell key={`${item.id}-${String(col.key)}`} item={item} column={col} />
      ))}
    </div>
  )
}

export { TableRow }
