import { FileSpreadsheetIcon, Loader2Icon } from "lucide-react"
import { useTranslations } from "next-intl"

import { useDownloadResume } from "./useDownloadResume"
import { Button } from "@/shared/ui"

const DownloadResume = () => {
  const t = useTranslations("resume.content_page.header.buttons")
  const { isPending, onDownload } = useDownloadResume()

  return (
    <Button onClick={onDownload} className="gap-2">
      {isPending ? (
        <>
          <Loader2Icon size={16} className="animate-spin" />
          {t("download_loading")}
        </>
      ) : (
        <>
          <FileSpreadsheetIcon size={16} />
          {t("download")}
        </>
      )}
    </Button>
  )
}

export { DownloadResume }
