import { PERSONAL_LINKS } from "@/shared/constants"
import { Button } from "@rndm/ui/components"
import { PlusIcon } from "lucide-react"

type LinkButtonsProps = {
  items: typeof PERSONAL_LINKS
  onAppend: (item: (typeof PERSONAL_LINKS)[number]) => void
}

export const LinkButtons = ({ items, onAppend }: LinkButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Button
          key={item.url}
          size="sm"
          type="button"
          variant="secondary"
          onClick={() => onAppend(item)}
        >
          <PlusIcon className="mr-2" size={18} />
          {item.text}
        </Button>
      ))}
    </div>
  )
}
