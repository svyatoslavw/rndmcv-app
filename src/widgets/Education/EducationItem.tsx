import { ResumeEducationCard } from "@/entities/resume"
import type { IEducation } from "@/shared/lib"

interface EducationItemProps {
  eduction: IEducation
  index: number
  onEditChange: () => void
}

const EducationItem = ({ index, eduction, onEditChange }: EducationItemProps) => {
  return (
    <ResumeEducationCard index={index} education={eduction} key={eduction.id}>
      <div
        className="w-full cursor-pointer transition-all hover:text-neutral-400"
        onClick={onEditChange}
      >
        {eduction.school}
      </div>
    </ResumeEducationCard>
  )
}

export { EducationItem }
