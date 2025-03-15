import { selectResumes, useResumeActions } from "@/entities/resume"
import { CreateResume, DeleteResume } from "@/features"
import { PUBLIC_URLS } from "@/shared/config"
import { useAppSelector } from "@/shared/lib/store"
import { ResumeDocument } from "@/widgets"
import { Button } from "@rndm/ui/components"
import { FilePenLineIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const ResumeList = () => {
  const resumes = useAppSelector(selectResumes)
  const { setSelectedResume } = useResumeActions()
  const { push } = useRouter()
  const onSelectResume = (id: string) => {
    setSelectedResume({ id })
    push(PUBLIC_URLS.CONTENT)
  }

  return (
    <div className="mb-8 flex w-full flex-col flex-wrap gap-3 md:flex-row">
      <CreateResume />
      {resumes.map((resume) => (
        <section
          key={resume.id}
          className="w-[310px] cursor-pointer gap-2 overflow-hidden rounded-lg transition-all hover:opacity-95"
        >
          <div className="rounded-lg shadow-lg" onClick={() => onSelectResume(resume.id)}>
            <ResumeDocument
              isCard
              className="h-[450px] min-h-[450px] w-[310px] overflow-hidden rounded-lg"
              customization={resume.customization}
              general={resume.general}
              height={450}
              width={310}
            />
          </div>
          <div className="mt-2 flex justify-end gap-1 px-0.5 pb-2">
            <Button onClick={() => onSelectResume(resume.id)} size={"sm"} variant="default">
              <FilePenLineIcon className="mr-1 size-4" />
              <span>Edit</span>
            </Button>
            <DeleteResume resumeId={resume.id} />
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

export { ResumeList }
