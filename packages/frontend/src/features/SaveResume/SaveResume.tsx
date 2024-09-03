import { FileIcon, Loader2Icon } from "lucide-react"

import { useSaveResume } from "./useSaveResume"
import { Button } from "@/shared/ui"

const SaveResume = () => {
  const { isPending, onSave } = useSaveResume()

  return (
    <Button onClick={onSave} className="gap-2">
      {isPending ? (
        <>
          Downloading...
          <Loader2Icon size={16} className="animate-spin" />
        </>
      ) : (
        <>
          Download
          <FileIcon size={16} />
        </>
      )}
    </Button>
  )
}

export { SaveResume }
