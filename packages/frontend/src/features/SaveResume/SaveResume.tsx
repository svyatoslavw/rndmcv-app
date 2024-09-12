import { FileIcon, Loader2Icon } from "lucide-react"

import { useSaveResume } from "./useSaveResume"
import { Button } from "@/shared/ui"

const SaveResume = () => {
  const { isPending, onSave } = useSaveResume()

  return (
    <Button onClick={onSave} className="gap-2">
      {isPending ? (
        <>
          <Loader2Icon size={16} className="animate-spin" />
          Downloading...
        </>
      ) : (
        <>
          <FileIcon size={16} />
          Download
        </>
      )}
    </Button>
  )
}

export { SaveResume }
