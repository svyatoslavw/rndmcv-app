import { Column } from "@/shared/types"
import { TableRow } from "./TableRow"

interface TableProps<T> {
  data: T[]
  columns: Column<T>[]
}

const Table = <T extends { id: string }>({ data, columns }: TableProps<T>) => {
  return (
    <div className="space-y-2 overflow-x-auto">
      {data.map((item) => (
        <TableRow key={item.id} item={item} columns={columns} />
      ))}
    </div>
  )
}

export { Table }
