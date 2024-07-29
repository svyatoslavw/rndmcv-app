import { DraggableCard } from "@/entities/resume"
import type { IExperience } from "@/shared/lib"

interface ExperienceItemProps {
  experience: IExperience
  index: number
  onEditChange: () => void
}

const ExperienceItem = ({ index, experience, onEditChange }: ExperienceItemProps) => {
  return (
    <DraggableCard index={index} item={experience} key={experience.id} draggableId={experience.id}>
      <div
        className="w-full cursor-pointer transition-all hover:text-neutral-400"
        onClick={onEditChange}
      >
        {experience.employer}
      </div>
    </DraggableCard>
  )
}

export { ExperienceItem }
