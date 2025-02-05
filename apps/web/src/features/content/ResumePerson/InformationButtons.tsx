import { PERSONAL_INFORMATION } from "@/shared/constants"
import { Button } from "@rndm/ui/components"
import { PlusIcon } from "lucide-react"

type ButtonsProps = {
  items: typeof PERSONAL_INFORMATION
  onAppend: (item: (typeof PERSONAL_INFORMATION)[number]) => void
}

export const InformationButtons = ({ items, onAppend }: ButtonsProps) => {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <Button
          key={item.key}
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
