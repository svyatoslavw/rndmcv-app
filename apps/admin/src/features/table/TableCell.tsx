import type { Column } from "@/shared/types"

interface TableCellProps<T> {
  item: T
  column: Column<T>
}

const TableCell = <T,>({ item, column }: TableCellProps<T>) => {
  return column.render ? <>{column.render(item)}</> : <div>{String(item[column.key])}</div>
}

export { TableCell }
