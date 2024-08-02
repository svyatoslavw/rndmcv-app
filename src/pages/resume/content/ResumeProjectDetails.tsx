import { ResumeDetails } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { ProjectList } from "@/widgets"
import { FolderOpenIcon } from "lucide-react"

const ResumeProjectDetails = () => {
  const projects = useAppSelector((state) => state.resume.projects.items)

  return (
    <ResumeDetails
      items={projects}
      type="projects"
      Icon={FolderOpenIcon}
      render={(items, provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <ProjectList projects={items} />
        </div>
      )}
    />
  )
}

export { ResumeProjectDetails }
