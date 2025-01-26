import { FolderOpenIcon } from "lucide-react"

import { ProjectList } from "../ResumeDetailsList/ProjectList"

import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"

const ResumeProjectDetails = () => {
  const { items } = useAppSelector(selectGeneralResume("projects"))

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
