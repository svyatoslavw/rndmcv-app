"use client"

import { FileSpreadsheetIcon, Loader2Icon } from "lucide-react"
import { useRouter } from "next/navigation"

import { useDownloadResume } from "./useDownloadResume"
import { useProfile } from "@/entities/user"
import { Button } from "@/shared/ui"

const DownloadResume = () => {
  const router = useRouter()

  const { profile } = useProfile()
  const { isPending, onDownload } = useDownloadResume()
  const onRedirect = () => router.push("/auth")

  return (
    <Button onClick={profile ? onDownload : onRedirect} className="gap-2">
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
