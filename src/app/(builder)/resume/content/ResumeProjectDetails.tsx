import { FolderOpenIcon } from "lucide-react"

import { ResumeDetails } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { ProjectList } from "@/widgets"

const ResumeProjectDetails = () => {
  const projects = useAppSelector((state) => state.resume.projects.items)

  return (
    <ResumeDetails
      items={projects}
      type="projects"
      Icon={FolderOpenIcon}
      render={(items, provided) => (
        <div className="mx-0.5" ref={provided.innerRef} {...provided.droppableProps}>
          <ProjectList projects={items} />
        </div>
      )}
    />
  )
}

export { ResumeProjectDetails }
