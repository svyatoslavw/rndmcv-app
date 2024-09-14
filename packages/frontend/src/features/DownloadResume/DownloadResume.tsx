import { FileSpreadsheetIcon, Loader2Icon } from "lucide-react"

import { useDownloadResume } from "./useDownloadResume"
import { Button } from "@/shared/ui"

const DownloadResume = () => {
  const { isPending, onDownload } = useDownloadResume()

  return (
    <Button onClick={onDownload} className="gap-2">
      {isPending ? (
        <>
          <Loader2Icon size={16} className="animate-spin" />
          Downloading...
        </>
      ) : (
        <>
          <FileSpreadsheetIcon size={16} />
          Download
        </>
      )}
    </Button>
  )
}

export { DownloadResume }
