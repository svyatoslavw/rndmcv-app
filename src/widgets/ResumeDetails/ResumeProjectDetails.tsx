import { FolderOpenIcon } from "lucide-react"

import { useAppSelector } from "@/app/store"
import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { ProjectList } from "@/widgets"

const ResumeProjectDetails = () => {
  const {
    projects: { items }
  } = useAppSelector(selectGeneralResume)

  return (
    <ResumeDetails
      Icon={FolderOpenIcon}
      items={items}
      render={(items, provided) => (
        <div ref={provided.innerRef} className="mx-0.5" {...provided.droppableProps}>
          <ProjectList projects={items} />
        </div>
      )}
      type="projects"
    />
  )
}

export { ResumeProjectDetails }
