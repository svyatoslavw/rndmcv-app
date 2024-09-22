"use client"

import { ArrowRightIcon, ClipboardListIcon } from "lucide-react"
import Link from "next/link"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectResumeSelectedId } from "@/entities/resume"
import { CreateResume } from "@/features"
import { Button } from "@/shared/ui"
import { ResumeDocument } from "@/widgets"

const HomePage = () => {
  const dispatch = useAppDispatch()
  const resumes = useAppSelector((state) => state.resume.resumes)

  const onSelectResume = (id: string) => {
    dispatch(selectResumeSelectedId({ id }))
  }

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
            className="flex h-40 w-56 cursor-pointer flex-col justify-end gap-1 rounded-[40px] rounded-bl-none bg-gradient-to-br from-rose-400 to-red-500 px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-70"
          >
            <ClipboardListIcon size={44} strokeWidth={1.2} />
            <span>Resume</span>
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-28 grid w-[1280px] place-content-center gap-28">
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

          <div className="mb-8 flex w-full flex-wrap gap-3">
            <CreateResume />
            {resumes.map((resume) => (
              <Link
                key={resume.id}
                href={"/resume/content"}
                onClick={() => onSelectResume(resume.id)}
                className="h-96 w-60 cursor-pointer gap-2 overflow-hidden rounded-lg bg-white shadow transition-all hover:opacity-50"
              >
                <ResumeDocument
                  customization={resume.customization}
                  general={resume.general}
                  width={2}
                  height={3}
                  className="h-96"
                  isCard
                />
              </Link>
            ))}

            {Array.from({ length: 4 - resumes.length }).map((_, index) => (
              <div
                key={index}
                className="h-96 w-60 cursor-pointer gap-2 rounded-lg bg-white shadow transition-all hover:opacity-50"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export { HomePage }
