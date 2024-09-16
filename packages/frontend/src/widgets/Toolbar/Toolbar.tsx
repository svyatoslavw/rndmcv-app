"use client"

import {
  FileSearchIcon,
  NotepadTextIcon,
  PencilRulerIcon,
  SquareArrowOutUpRightIcon
} from "lucide-react"
import Link from "next/link"

import { ResumeDocument } from "../ResumeDocument/ResumeDocument"

import { useAppSelector } from "@/app/store"
import { selectResume } from "@/entities/resume"
import { Button, Dialog, DialogContent, DialogTrigger } from "@/shared/ui"

const Toolbar = () => {
  const { customization, general } = useAppSelector(selectResume)

  return (
    <div className="fixed bottom-3 right-3 flex flex-col items-center gap-2 sm:flex md:flex lg:hidden xl:hidden 2xl:hidden">
      <Button variant={"outline"} className="size-12 rounded-full p-3 shadow-md">
        <Link href="/resume/content">
          <NotepadTextIcon size={26} />
        </Link>
      </Button>
      <Button variant={"outline"} className="size-12 rounded-full p-3 shadow-md">
        <Link href="/resume/customize">
          <PencilRulerIcon size={26} />
        </Link>
      </Button>
      <Button variant={"outline"} className="size-12 rounded-full p-3 shadow-md">
        <Link href="/resume/customize">
          <SquareArrowOutUpRightIcon size={26} />
        </Link>
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="size-14 rounded-full p-3 text-white shadow-md">
            <FileSearchIcon size={30} />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-[720px] border-none bg-transparent">
          <div className="h-screen w-full overflow-y-auto">
            <ResumeDocument
              customization={customization}
              general={general}
              className="sm:block md:block"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { Toolbar }
