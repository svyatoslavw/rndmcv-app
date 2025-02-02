import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@rndm/ui/components"
import { EllipsisIcon, FilePenLine, FileX2 } from "lucide-react"
import Link from "next/link"

import { selectResumeId, selectResumes } from "@/entities/resume"
import { CreateResume } from "@/features"
import { PUBLIC_URLS } from "@/shared/config"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { ResumeDocument } from "@/widgets"

const ResumeCreateList = () => {
  const dispatch = useAppDispatch()
  const resumes = useAppSelector(selectResumes)

  const onSelectResume = (id: string) => {
    dispatch(selectResumeId(id))
  }

  return (
    <div className="mb-8 flex w-full flex-wrap gap-3">
      <CreateResume />
      {resumes.map((resume) => (
        <section
          key={resume.id}
          className="w-[310px] cursor-pointer gap-2 overflow-hidden rounded-lg transition-all hover:opacity-95"
        >
          <Link
            href={PUBLIC_URLS.CONTENT}
            className="rounded-lg"
            onClick={() => onSelectResume(resume.id)}
          >
            <ResumeDocument
              isCard
              className="h-[450px]"
              customization={resume.customization}
              general={resume.general}
              height={450}
              width={310}
            />
          </Link>
          <div className="mt-1 flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline">
                  <EllipsisIcon size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Resume</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <FilePenLine />
                    <span>Edit</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileX2 />
                    <span>Delete</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>
      ))}

      {Array.from({ length: 3 - resumes.length }).map((_, index) => (
        <div
          key={index}
          className="border-input bg-secondary relative h-[450px] w-[310px] cursor-pointer gap-2 rounded-lg border shadow-lg transition-all"
        />
      ))}
    </div>
  )
}

export { ResumeCreateList }
