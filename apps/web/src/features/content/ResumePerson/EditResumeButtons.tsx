import { Button } from "@rndm/ui/components"
import { CheckIcon, Loader2Icon } from "lucide-react"

type EditResumeButtonsProps = {
  state: { isLoading: boolean }
  onCancel: () => void
}

const EditResumeButtons = ({ state, onCancel }: EditResumeButtonsProps) => {
  return (
    <div className="bg-background sticky bottom-0 left-0 mt-5 flex w-full items-center justify-end gap-2 rounded-2xl px-6 py-3">
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
