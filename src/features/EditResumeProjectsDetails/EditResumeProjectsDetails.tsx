import { Button } from "@/shared/ui"
import { CheckIcon } from "lucide-react"

const EditResumeProjectsDetails = () => {
  return (
    <div className="relative flex flex-col gap-5">
      <div className="flex h-[calc(100vh-10rem)] flex-col gap-5 overflow-y-scroll rounded-lg bg-white p-6 shadow-md"></div>
      <div className="sticky bottom-0 left-0 mt-5 flex w-full items-center justify-end gap-2 rounded-lg bg-white px-6 py-3 shadow-md">
        <Button variant={"outline"}>Cancel</Button>
        <Button type="submit">
          <CheckIcon className="mr-2" size={16} />
          Save
        </Button>
      </div>
    </div>
  )
}

export { EditResumeProjectsDetails }
