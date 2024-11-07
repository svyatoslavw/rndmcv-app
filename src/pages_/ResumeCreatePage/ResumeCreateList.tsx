import Link from "next/link"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectResumeSelectedId } from "@/entities/resume"
import { CreateResume } from "@/features"
import { RESUME_URL } from "@/shared/config"
import { ResumeDocument } from "@/widgets"

const ResumeCreateList = () => {
  const dispatch = useAppDispatch()
  const resumes = useAppSelector((state) => state.resume.resumes)

  const onSelectResume = (id: string) => {
    dispatch(selectResumeSelectedId({ id }))
  }

  return (
    <div className="mb-8 flex w-full flex-wrap gap-3">
      <CreateResume />
      {resumes.map((resume) => (
        <Link
          key={resume.id}
          className="h-[450px] w-[310px] cursor-pointer gap-2 overflow-hidden rounded-lg transition-all hover:opacity-80"
          href={RESUME_URL.content()}
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
          className="h-[450px] w-[310px] cursor-pointer gap-2 rounded-lg bg-white shadow transition-all hover:opacity-50 dark:bg-secondary"
        />
      ))}
    </div>
  )
}

export { ResumeCreateList }
