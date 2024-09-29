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
      items={items}
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
