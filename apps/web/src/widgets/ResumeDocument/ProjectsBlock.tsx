import { FolderOpenIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"
import { CustomizationEntity, ProjectEntity, ResumeSection } from "@/shared/types"
import { DocumentHeading } from "./DocumentHeading"
import { DocumentSection } from "./DocumentSection"

interface ProjectsBlockProps {
  customization: CustomizationEntity
  projects: ResumeSection<ProjectEntity>
  isCard?: boolean
}

const ProjectsBlock = ({ customization, isCard, projects }: ProjectsBlockProps) => {
  const { spacing } = customization

  const getHeadingClasses = () =>
    cn({
      "text-[5px]": isCard
    })

  const getDescriptionClasses = () =>
    cn("text-left", {
      "text-[5px] ": isCard
    })

  const renderProjectItem = (item: ProjectEntity) => (
    <div className="mb-2">
      {item.description && <p className={getDescriptionClasses()}>{item.description}</p>}
    </div>
  )

  return (
    <div>
      <DocumentHeading Icon={FolderOpenIcon} customization={customization} isCard={isCard}>
        Projects
      </DocumentHeading>
      <DocumentSection
        fontSize={spacing.fontSize}
        heading="title"
        containerClassName="text-left items-start"
        headingClassName={getHeadingClasses()}
        items={projects.items}
        render={renderProjectItem}
      />
    </div>
  )
}

export { ProjectsBlock }
