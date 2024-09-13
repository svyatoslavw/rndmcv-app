"use client"

import { CheckIcon, PlusIcon } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Pacifico } from "next/font/google"
import { useCallback, useMemo, useState } from "react"

import { SectionButton } from "./SectionButton"
import { hideIsFirstLoading, selectGeneralResume, toggleSectionInResume } from "@/entities/resume"
import { getContentSections } from "@/shared/lib/constants"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { TSectionKey } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/shared/ui"

const font = Pacifico({ weight: "400", subsets: ["latin", "cyrillic"], fallback: ["sans-serif"] })

const AddSectionToResume = () => {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()
  const dispatch = useAppDispatch()

  const t = useTranslations("resume.content_page.add_section")
  const tSections = useTranslations("constants.content_sections")

  const { visibleBlocks, isFirstLoading } = useAppSelector(selectGeneralResume)

  const contentSections = useMemo(() => getContentSections(tSections), [tSections, locale])

  const sections = useMemo(() => {
    return contentSections.filter((section) => !visibleBlocks.includes(section.content))
  }, [visibleBlocks])

  const onAddSection = useCallback(
    (section: TSectionKey) => {
      dispatch(toggleSectionInResume({ section }))
      isFirstLoading && dispatch(hideIsFirstLoading())
      setIsOpen(false)
    },
    [dispatch, isFirstLoading]
  )

  return (
    <div className="mx-auto w-full text-center">
      {isFirstLoading && (
        <h3 className={cn("mb-3 text-3xl font-medium", font.className)}>{t("first_loading")}</h3>
      )}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="w-fit" asChild>
          <Button
            size={"lg"}
            variant={sections.length ? "default" : "outline"}
            className={"relative z-10 inline-flex transition-all hover:scale-105 active:scale-105"}
          >
            {sections.length ? (
              <>
                <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-b from-primary/60 to-primary opacity-75 blur" />
                <PlusIcon size={18} className="mr-2" />
                {t("add_content")}
              </>
            ) : (
              <>
                <CheckIcon size={18} className="mr-2" />
                {t("empty_content")}
              </>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-6xl">
          <DialogHeader>
            <DialogTitle>{t("add_content")}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-4 gap-4 py-4">
            {sections.length ? (
              sections.map((section) => (
                <SectionButton
                  key={section.content}
                  section={section}
                  onAddSection={onAddSection}
                />
              ))
            ) : (
              <span className="col-span-full text-center text-xl font-medium">
                {t("empty_content")}
              </span>
            )}
          </div>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { AddSectionToResume }
