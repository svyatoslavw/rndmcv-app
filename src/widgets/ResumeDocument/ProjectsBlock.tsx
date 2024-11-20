import { FolderOpenIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"
import { ICustomization, IProject, ResumeSection } from "@/shared/types"
import { ResumeDocumentHeading } from "@/widgets/ResumeDocument/ResumeDocumentHeading"
import { ResumeDocumentSection } from "@/widgets/ResumeDocument/ResumeDocumentSection"

interface ProjectsBlockProps {
  customization: ICustomization
  projects: ResumeSection<IProject>
  isCard?: boolean
}

const ProjectsBlock = ({ customization, isCard, projects }: ProjectsBlockProps) => {
  const { spacing } = customization

  return (
    <div>
      <ResumeDocumentHeading Icon={FolderOpenIcon} customization={customization} isCard={isCard}>
        Projects
      </ResumeDocumentHeading>
      <ResumeDocumentSection
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
