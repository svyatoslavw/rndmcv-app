import { DraggableCard } from "@/entities/resume"
import type { IEducation } from "@/shared/lib"

interface EducationItemProps {
  eduction: IEducation
  index: number
  onEditChange: () => void
}

const EducationItem = ({ index, eduction, onEditChange }: EducationItemProps) => {
  return (
    <DraggableCard index={index} item={eduction} key={eduction.id} draggableId={eduction.id}>
      <div
        className="w-full cursor-pointer transition-all hover:text-neutral-400"
        onClick={onEditChange}
      >
        {eduction.school}
      </div>
    </DraggableCard>
  )
}

export { EducationItem }
