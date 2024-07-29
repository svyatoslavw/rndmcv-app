import { DraggableCard } from "@/entities/resume"
import type { IProject } from "@/shared/lib"

interface ProjectItemProps {
  project: IProject
  index: number
  onEditChange: () => void
}

const ProjectItem = ({ index, project, onEditChange }: ProjectItemProps) => {
  return (
    <DraggableCard index={index} item={project} key={project.id} draggableId={project.id}>
      <div
        className="w-full cursor-pointer transition-all hover:text-neutral-400"
        onClick={onEditChange}
      >
        {project.title}
      </div>
    </DraggableCard>
  )
}

export { ProjectItem }
