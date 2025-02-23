import { Button, Input, Label } from "@rndm/ui/components"
import { Search } from "lucide-react"

const TableSearch = ({ search }: { search: string }) => {
  return (
    <form action="/users" method="GET">
      <Label className="flex items-center gap-1">
        <Input placeholder="Search..." defaultValue={search} name="search" />
        <input type="hidden" name="page" value="1" />
        <Button type="submit" variant={"outline"} size={"icon"}>
          <Search size={18} />
        </Button>
      </Label>
    </form>
  )
}

export { TableSearch }
