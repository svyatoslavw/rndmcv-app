"use client"

import { Button, Dialog, DialogContent, DialogTrigger } from "@rndm/ui/components"
import {
  FileSearchIcon,
  NotepadTextIcon,
  PencilRulerIcon,
  SquareArrowOutUpRightIcon
} from "lucide-react"
import Link from "next/link"

import { PUBLIC_URLS } from "../../shared/config"
import { ResumeDocument } from "../ResumeDocument/ResumeDocument"

import { selectResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"

const Toolbar = () => {
  const { customization, general } = useAppSelector(selectResume)

  return (
    <div className="fixed bottom-3 right-3 flex flex-col items-center gap-2 sm:flex md:flex lg:hidden xl:hidden 2xl:hidden">
      <Button className="size-12 rounded-full p-3 shadow-md" variant={"outline"}>
        <Link href={PUBLIC_URLS.CONTENT}>
          <NotepadTextIcon size={26} />
        </Link>
      </Button>
      <Button className="size-12 rounded-full p-3 shadow-md" variant={"outline"}>
        <Link href="/resume/customize">
          <PencilRulerIcon size={26} />
        </Link>
      </Button>
      <Button className="size-12 rounded-full p-3 shadow-md" variant={"outline"}>
        <Link href="/resume/customize">
          <SquareArrowOutUpRightIcon size={26} />
        </Link>
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Link href={PUBLIC_URLS.SHARE} className="size-12 rounded-full p-3 text-white shadow-md">
            <FileSearchIcon size={30} />
          </Link>
        </DialogTrigger>
        <DialogContent className="w-full max-w-[720px] border-none bg-transparent">
          <div className="h-screen w-full overflow-y-auto">
            <ResumeDocument
              className="sm:block md:block"
              customization={customization}
              general={general}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { Toolbar }
