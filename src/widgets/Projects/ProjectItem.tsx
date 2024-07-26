import { ResumeProjectCard } from "@/entities/resume/ui/ResumeProjectCard"
import type { IProject } from "@/shared/lib"

interface ProjectItemProps {
  project: IProject
  index: number
  onEditChange: () => void
}

const ProjectItem = ({ index, project, onEditChange }: ProjectItemProps) => {
  return (
    <ResumeProjectCard index={index} project={project} key={project.id}>
      <div
        className="w-full cursor-pointer transition-all hover:text-neutral-400"
        onClick={onEditChange}
      >
        {project.title}
      </div>
    </ResumeProjectCard>
  )
}

export { ProjectItem }
