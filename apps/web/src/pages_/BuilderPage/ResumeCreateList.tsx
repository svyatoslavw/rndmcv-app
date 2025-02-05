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

import { selectResumes, useResumeActions } from "@/entities/resume"
import { CreateResume } from "@/features"
import { PUBLIC_URLS } from "@/shared/config"
import { useAppSelector } from "@/shared/lib/store"
import { ResumeDocument } from "@/widgets"
import { useRouter } from "next/navigation"

const ResumeCreateList = () => {
  const resumes = useAppSelector(selectResumes)
  const { setSelectedResume } = useResumeActions()
  const { push } = useRouter()
  const onSelectResume = (id: string) => {
    setSelectedResume({ id })
    push(PUBLIC_URLS.CONTENT)
  }

  return (
    <div className="mb-8 flex w-full flex-wrap gap-3">
      <CreateResume />
      {resumes.map((resume) => (
        <section
          key={resume.id}
          className="w-[310px] cursor-pointer gap-2 overflow-hidden rounded-lg transition-all hover:opacity-95"
        >
          <div className="shadow-lg" onClick={() => onSelectResume(resume.id)}>
            <ResumeDocument
              isCard
              className="h-[450px] w-[310px]"
              customization={resume.customization}
              general={resume.general}
              height={450}
              width={310}
            />
          </div>
          <div className="mt-1 flex justify-center px-0.5 pb-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline">
                  <EllipsisIcon size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="font-default w-56">
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
