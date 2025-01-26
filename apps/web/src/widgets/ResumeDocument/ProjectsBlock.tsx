import { FolderOpenIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"
import { ICustomization, Project, ResumeSection } from "@/shared/types"

import { DocumentHeading } from "./DocumentHeading"
import { DocumentSection } from "./DocumentSection"

interface ProjectsBlockProps {
  customization: ICustomization
  projects: ResumeSection<Project>
  isCard?: boolean
}

const ProjectsBlock = ({ customization, isCard, projects }: ProjectsBlockProps) => {
  const { spacing } = customization

  return (
    <div>
      <DocumentHeading Icon={FolderOpenIcon} customization={customization} isCard={isCard}>
        Projects
      </DocumentHeading>
      <DocumentSection
        fontSize={spacing.fontSize}
        heading="title"
        headingClassName={cn({ "text-[5px]": isCard })}
        items={projects.items}
        render={(item) => (
          <div className="mb-2">
            {item.description && <p className={cn({ "text-[5px]": isCard })}>{item.description}</p>}
          </div>
        )}
      />
    </div>
  )
}

export { ProjectsBlock }

