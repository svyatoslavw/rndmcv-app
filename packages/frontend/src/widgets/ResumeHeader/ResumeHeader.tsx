"use client"

import { SaveAllIcon } from "lucide-react"
import { useTranslations } from "next-intl"

import { DownloadResume } from "@/features"
import { Button } from "@/shared/ui"

const ResumeHeader = () => {
  const t = useTranslations("resume.content_page.header")
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between rounded-xl bg-white p-5 shadow-md">
      <h3 className="text-xl font-bold">{t("title")}</h3>
      <div className="flex gap-2">
        <Button className="gap-2" variant={"outline"}>
          <SaveAllIcon size={16} />
          {t("buttons.save")}
        </Button>
        <DownloadResume />
      </div>
    </div>
  )
}

export { ResumeHeader }
