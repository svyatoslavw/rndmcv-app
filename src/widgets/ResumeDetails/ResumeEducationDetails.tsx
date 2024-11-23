import { GraduationCapIcon } from "lucide-react"

import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { EducationList } from "@/widgets"

const ResumeEducationDetails = () => {
  const { items } = useAppSelector(selectGeneralResume("education"))

  return (
    <ResumeDetails
      Icon={GraduationCapIcon}
      items={items}
      render={(items, provided) => (
        <div ref={provided.innerRef} className="mx-0.5" {...provided.droppableProps}>
          <EducationList education={items} />
        </div>
      )}
      type="education"
    />
  )
}

export { ResumeEducationDetails }
