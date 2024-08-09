"use client"

import {
  FileSearchIcon,
  NotepadTextIcon,
  PencilRulerIcon,
  SquareArrowOutUpRightIcon
} from "lucide-react"
import { Work_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/shared/lib/utils"
import { ResumeDocument } from "@/widgets"

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "max-w-screen flex h-screen max-h-screen w-screen bg-zinc-100",
        work_sans.className
      )}
    >
      <div className="relative mx-auto flex h-full w-full gap-8 bg-zinc-100 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-8 2xl:px-10">
        <header className="mt-8 hidden h-fit flex-col items-center gap-4 rounded-xl bg-white p-4 text-sm sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
          <Link href="/">
            <Image src="/logo.webp" width={70} height={70} className="rounded-full" alt="logo" />
          </Link>
          <Link
            className="flex w-full flex-col items-center gap-2 rounded-xl p-2 transition-all hover:bg-zinc-50"
            href="/resume/content"
          >
            <NotepadTextIcon size={26} />
            Content
          </Link>
          <Link
            className="flex w-full flex-col items-center gap-2 rounded-xl p-2 transition-all hover:bg-zinc-50"
            href="/resume/customize"
          >
            <PencilRulerIcon size={26} />
            Costumize
          </Link>
        </header>
        <div className="flex w-full gap-8 sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px]">
          <div className="relative w-full overflow-hidden scroll-smooth pb-8 pt-8 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            {children}
          </div>
          <div className="fixed bottom-3 right-3 flex flex-col items-center gap-2">
            <div className="rounded-full bg-white p-2 shadow-md">
              <NotepadTextIcon size={26} />
            </div>
            <div className="rounded-full bg-white p-2 shadow-md">
              <PencilRulerIcon size={26} />
            </div>
            <div className="rounded-full bg-white p-2 shadow-md">
              <SquareArrowOutUpRightIcon size={26} />
            </div>
            <div className="rounded-full bg-primary p-3 text-white shadow-md">
              <FileSearchIcon size={30} />
            </div>
          </div>
          <ResumeDocument />
        </div>
      </div>
    </div>
  )
}
