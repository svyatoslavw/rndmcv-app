import { Button } from "@rndm/ui/components"
import { CheckIcon, Loader2Icon } from "lucide-react"

type EditResumeButtonsProps = {
  state: { isLoading: boolean }
  onCancel: () => void
}

const EditResumeButtons = ({ state, onCancel }: EditResumeButtonsProps) => {
  return (
    <div className="bg-background dark:border-secondary sticky bottom-4 left-0 mt-4 flex w-full border-collapse items-center justify-end gap-3 rounded border px-6 py-4">
      <Button type="button" variant={"outline"} onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit">
        {state.isLoading ? (
          <Loader2Icon className="mr-2 animate-spin" size={16} />
        ) : (
          <CheckIcon className="mr-2" size={16} />
        )}
        Save
      </Button>
    </div>
  )
}

export { EditResumeButtons }
