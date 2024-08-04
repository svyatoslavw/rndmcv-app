import {
  ArrowRightIcon,
  ClipboardListIcon,
  FilePlus2Icon,
  FileSpreadsheetIcon,
  PanelsTopLeftIcon
} from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/shared/ui"

export default function Home() {
  return (
    <main className="mx-auto w-[1100px]">
      <div className="mx-auto flex h-[calc(100vh-120px)] w-full flex-col items-center font-rubik">
        <h4 className="text-lg font-semibold">Welcome to your Career Tools</h4>
        <h1 className="mt-10 w-[550px] text-center text-6xl font-extrabold">
          What do you want to create?
        </h1>
        <div className="mt-16 flex gap-4">
          <Link
            to="resume/content"
            className="flex h-36 w-56 cursor-pointer flex-col justify-end gap-2 rounded-[40px] rounded-bl-none bg-rose-500 px-4 py-2 text-sm font-medium text-white shadow transition-all hover:bg-rose-400"
          >
            <ClipboardListIcon size={44} strokeWidth={1.2} />
            <span>Resume</span>
          </Link>
          <Link
            to="resume/content"
            className="flex h-36 w-56 cursor-pointer flex-col justify-end gap-2 rounded-[40px] rounded-bl-none bg-teal-500 px-4 py-2 text-sm font-medium text-white shadow transition-all hover:bg-teal-400"
          >
            <PanelsTopLeftIcon size={44} strokeWidth={1.2} />
            <span>Personal Website</span>
          </Link>
          <Link
            to="resume/customize"
            className="flex h-36 w-56 cursor-pointer flex-col justify-end gap-2 rounded-[40px] rounded-bl-none bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow transition-all hover:bg-indigo-400"
          >
            <FileSpreadsheetIcon size={44} strokeWidth={1.2} />
            <span>Cover Letter</span>
          </Link>
        </div>
      </div>
      <div className="grid gap-28">
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
          <div className="flex gap-2">
            <div className="flex h-64 w-44 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-neutral-300">
              <FilePlus2Icon size={44} strokeWidth={1.2} />
            </div>

            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-64 w-44 cursor-pointer gap-2 bg-white shadow" />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
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
          <div className="flex flex-col">
            <div className="flex h-7 w-full items-center gap-1 rounded-t-sm bg-white px-4">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <div className="h-2 w-2 rounded-full bg-amber-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <div className="h-[650px] w-full bg-neutral-200/70" />
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
          <div className="flex gap-2">
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
