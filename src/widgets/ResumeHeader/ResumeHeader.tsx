import { FileDownIcon } from "lucide-react"

import { Button } from "@/shared/ui"

const ResumeHeader = () => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between rounded-xl bg-white p-5 shadow-md">
      <h3 className="text-xl font-bold">Resume</h3>
      <Button className="gap-1">
        Download
        <FileDownIcon size={18} />
      </Button>
    </div>
  )
}

export { ResumeHeader }
