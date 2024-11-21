import Link from "next/link"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectResumeId, selectResumes } from "@/entities/resume"
import { CreateResume } from "@/features"
import { PUBLIC_URLS } from "@/shared/config"
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
        <Link
          key={resume.id}
          className="h-[450px] w-[310px] cursor-pointer gap-2 overflow-hidden rounded-lg transition-all hover:opacity-95"
          href={PUBLIC_URLS.CONTENT}
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
      ))}

      {Array.from({ length: 3 - resumes.length }).map((_, index) => (
        <div
          key={index}
          className="relative h-[450px] w-[310px] cursor-pointer gap-2 rounded-lg border border-input bg-secondary shadow-lg transition-all"
        />
      ))}
    </div>
  )
}

export { ResumeCreateList }
