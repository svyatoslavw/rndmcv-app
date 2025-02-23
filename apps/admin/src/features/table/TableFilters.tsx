import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@rndm/ui/components"
import { cn } from "@rndm/ui/lib/utils"
import {
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZIcon,
  ArrowDownZAIcon,
  FilterIcon
} from "lucide-react"

type TableFiltersProps = {
  currentSort: string
  currentDirection: "asc" | "desc"
}

const SORT_OPTIONS = [
  { label: "Creation Date (asc)", value: "createdAt", icon: ArrowDown01, direction: "asc" },
  { label: "Creation Date (desc)", value: "createdAt", icon: ArrowDown10, direction: "desc" },
  { label: "Name (asc)", value: "name", icon: ArrowDownAZIcon, direction: "asc" },
  { label: "Name (desc)", value: "name", icon: ArrowDownZAIcon, direction: "desc" }
] as const

const TableFilters = ({ currentSort, currentDirection }: TableFiltersProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="gap-1">
          <FilterIcon size={18} />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        {SORT_OPTIONS.map((option) => (
          <form key={option.label} action="/users" method="GET">
            <input type="hidden" name="sort" value={option.value} />
            <input type="hidden" name="direction" value={option.direction} />
            <input type="hidden" name="page" value="1" />
            <DropdownMenuItem
              asChild
              className={cn({
                "bg-gray-100": currentSort === option.value && currentDirection === option.direction
              })}
            >
              <button type="submit" className="w-full">
                <option.icon className="mr-2" />
                {option.label}
              </button>
            </DropdownMenuItem>
          </form>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { TableFilters }
