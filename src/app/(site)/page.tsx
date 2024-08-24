import {
  ArrowRightIcon,
  ClipboardListIcon,
  FilePlus2Icon,
  FileSpreadsheetIcon,
  PanelsTopLeftIcon
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/shared/ui"
import { AspectRatio } from "@/shared/ui/aspect-ratio"

export default function Home() {
  return (
    <main className="mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
      <div className="font-rubik mx-auto flex w-full flex-col items-center">
        <h4 className="text-lg font-semibold">Welcome to your Career Tools</h4>
        <h1 className="mt-10 px-4 text-center text-6xl font-extrabold sm:w-full md:w-full lg:w-[450px] xl:w-[550px] 2xl:w-[550px]">
          What do you want to create?
        </h1>
        <div className="mt-16 flex w-full flex-wrap justify-center gap-4">
          <Link
            href="/resume/content"
            className="flex h-36 w-56 cursor-pointer flex-col justify-end gap-2 rounded-[40px] rounded-bl-none bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-all hover:bg-primary/75"
          >
            <ClipboardListIcon size={44} strokeWidth={1.2} />
            <span>Resume</span>
          </Link>
          <Link
            href="/resume/content"
            className="flex h-36 w-56 cursor-pointer flex-col justify-end gap-2 rounded-[40px] rounded-bl-none bg-teal-500 px-4 py-2 text-sm font-medium text-white shadow transition-all hover:bg-teal-400"
          >
            <PanelsTopLeftIcon size={44} strokeWidth={1.2} />
            <span>Personal Website</span>
          </Link>
          <Link
            href="/resume/customize"
            className="flex h-36 w-56 cursor-pointer flex-col justify-end gap-2 rounded-[40px] rounded-bl-none bg-zinc-500 px-4 py-2 text-sm font-medium text-white shadow transition-all hover:bg-zinc-400"
          >
            <FileSpreadsheetIcon size={44} strokeWidth={1.2} />
            <span>Cover Letter</span>
          </Link>
        </div>
      </div>
      <div className="mt-28 grid gap-28">
        <div className="flex flex-col gap-8">
          <div className="flex w-full justify-between">
            <div>
              <h2 className="text-3xl font-semibold">My Resumes</h2>
              <h5 className="text-sm text-neutral-600">
                Your first resume – 100% free, forever, all features, unlimited downloads, yes
                really.
              </h5>
            </div>
            <Button className="gap-1" variant={"link"}>
              View Templates
              <ArrowRightIcon size={16} />
            </Button>
          </div>
          <div className="flex w-full flex-wrap gap-3">
            <div className="flex h-64 w-44 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-neutral-300 transition-all hover:opacity-50">
              <FilePlus2Icon size={44} strokeWidth={1.2} />
            </div>

            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-64 w-44 cursor-pointer gap-2 bg-white shadow transition-all hover:opacity-50"
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col gap-8">
          <div className="flex w-full justify-between">
            <div>
              <h2 className="text-3xl font-semibold">My website</h2>
              <h5 className="text-sm text-neutral-600">
                Create your free personal website to showcase yourself.
              </h5>
            </div>
            <Button className="gap-1" variant={"link"}>
              View Templates
              <ArrowRightIcon size={16} />
            </Button>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex h-7 items-center gap-1 rounded-t-sm bg-white px-4">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <div className="h-2 w-2 rounded-full bg-amber-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <AspectRatio ratio={16 / 9} className="rounded-b-lg bg-neutral-200/70" />
          </div>
        </div>
        <div className="flex flex-col gap-8 pb-10">
          <div className="flex w-full justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Cover letter templates</h2>
              <h5 className="text-sm text-neutral-600">
                Your first cover letter – 100% free, forever, all features, unlimited downloads, yes
                really.
              </h5>
            </div>
            <Button className="gap-1" variant={"link"}>
              View Templates
              <ArrowRightIcon size={16} />
            </Button>
          </div>
          <div className="flex w-full flex-wrap gap-3">
            <div className="flex h-64 w-44 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-neutral-300">
              <FilePlus2Icon size={44} strokeWidth={1.2} />
            </div>

            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-64 w-44 cursor-pointer gap-2 bg-white shadow" />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
